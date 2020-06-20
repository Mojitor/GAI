import * as vscode from 'vscode';
import { ANTLRInputStream, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { TerminalNode } from 'antlr4ts/tree';
import { gaiLexer } from './grammar/gaiLexer';
import { gaiParser, IncludeContext, Interface_declContext, Func_declContext, Formal_parametersContext, TypeContext, Array_typeContext, Ns_typeContext, Struct_declContext, Field_declContext, Enum_declContext, Enum_filedContext } from './grammar/gaiParser';
import { gaiListener } from './grammar/gaiListener';

const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();

const legend = (function () {
    const tokenTypesLegend = [
        'comment', 'string', 'keyword', 'number', 'regexp', 'operator', 'namespace',
        'type', 'struct', 'class', 'interface', 'enum', 'typeParameter', 'function',
        'member', 'macro', 'variable', 'parameter', 'property', 'label'
    ];
    tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));

    const tokenModifiersLegend = [
        'declaration', 'documentation', 'readonly', 'static', 'abstract', 'deprecated',
        'modification', 'async'
    ];
    tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));
    return new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);
})();

const gaiTokenIndex = (function () {
    const idx: number[] = new Array(128);

    for (let index = 0; index < idx.length; index++) {
        idx[index] = -1;
    }

    idx[16] = tokenTypes.get('string')!;    //STRING_CONSTANT
    idx[17] = tokenTypes.get('type')!;   //BASE_TYPE_NAME
    idx[18] = tokenTypes.get('label')!;     //IDENT  
    idx[19] = tokenTypes.get('number')!;    //HEX_INTEGER_CONSTANT
    idx[20] = tokenTypes.get('number')!;    //INTEGER_CONSTANT
    idx[21] = tokenTypes.get('number')!;    //FLOAT_CONSTANT
    idx[22] = tokenTypes.get('comment')!;    //BLOCK_COMMENT
    idx[23] = tokenTypes.get('comment')!;    //COMMENT
    idx[1] = tokenTypes.get('keyword')!;    //include
    idx[3] = tokenTypes.get('keyword')!;     //namespace
    idx[5] = tokenTypes.get('keyword')!;     //inferface
    idx[13] = tokenTypes.get('keyword')!;   //struct
    idx[14] = tokenTypes.get('keyword')!;    //enum

    return idx;
})();

export function GetGaiSemanticTokensProvider() {
    return vscode.languages.registerDocumentSemanticTokensProvider(
        {
            language: 'gai'
        },
        new GaiSemanticTokensProvider(),
        legend
    );
}

interface IParsedToken {
    line: number;
    startCharacter: number;
    length: number;
    tokenType: number;
    tokenModifiers: number;
}

class TokenListener implements gaiListener {
    tokens: IParsedToken[];

    constructor(t: IParsedToken[]) {
        this.tokens = t;
    }

    enterInterface_decl(ctx: Interface_declContext) {
        this.addParsedToken(ctx.IDENT(), tokenTypes.get('interface')!);
    }

    enterFunc_decl(ctx: Func_declContext) {
        this.addParsedToken(ctx.IDENT(), tokenTypes.get('function')!);
    }

    enterFormal_parameters(ctx: Formal_parametersContext) {
        const ids = ctx.IDENT();
        for (let index = 0; index < ids.length; index++) {
            const element = ids[index];
            this.addParsedToken(element, tokenTypes.get('parameter')!);
        }
    }

    enterArray_type(ctx: Array_typeContext) {
        this.addParsedToken(ctx.getChild(1) as TerminalNode, tokenTypes.get('type')!);
        this.addParsedToken(ctx.getChild(2) as TerminalNode, tokenTypes.get('type')!);
    }

    enterNs_type(ctx: Ns_typeContext) {
        const ids = ctx.ns_ident().IDENT();
        for (let index = 0; index < ids.length; index++) {
            const element = ids[index];
            this.addParsedToken(element, tokenTypes.get('type')!);
        }
    }

    enterStruct_decl(ctx: Struct_declContext) {
        this.addParsedToken(ctx.IDENT(), tokenTypes.get('struct')!);
    }

    enterField_decl(ctx: Field_declContext) {
        this.addParsedToken(ctx.IDENT(), tokenTypes.get('member')!);
    }

    enterEnum_decl(ctx:Enum_declContext){
        this.addParsedToken(ctx.IDENT(), tokenTypes.get('enum')!);
    }

    addParsedToken(tn: TerminalNode, tokenType: number, tokenModifiers: number[] = []) {
        if (tn) {
            const t = tn.symbol;
            let result = 0;
            for (let i = 0; i < tokenModifiers.length; i++) {
                result = result | (1 << tokenModifiers[i]!);
            }

            this.tokens.push({
                line: t.line - 1,
                startCharacter: t.charPositionInLine,
                length: t.stopIndex - t.startIndex + 1,
                tokenType: tokenType,
                tokenModifiers: result
            });
        }
    }
}

class GaiSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
    onDidChangeSemanticTokens?: vscode.Event<void> | undefined;
    provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SemanticTokens> {
        const builder = new vscode.SemanticTokensBuilder();

        const allTokens: IParsedToken[] = [];

        const instream = new ANTLRInputStream(document.getText());
        const laxer = new gaiLexer(instream);
        const tokenStream = new CommonTokenStream(laxer);

        // tokenStream.fill();

        const parser = new gaiParser(tokenStream);

        const tree = parser.schema();

        const listener: gaiListener = new TokenListener(allTokens);

        ParseTreeWalker.DEFAULT.walk(listener, tree);

        this.fillToken(tokenStream.getTokens(), allTokens);

        allTokens.forEach((token) => {
            builder.push(token.line, token.startCharacter, token.length, token.tokenType, token.tokenModifiers);
        });

        return builder.build();
    }
    fillToken(tokens: Token[], allTokens: IParsedToken[]) {

        tokens.forEach(t => {
            const tokenType = gaiTokenIndex[t.type];
            if (tokenType >= 0)
                allTokens.push(
                    {
                        line: t.line - 1,
                        startCharacter: t.charPositionInLine,
                        length: t.stopIndex - t.startIndex + 1,
                        tokenType: tokenType,
                        tokenModifiers: 0
                    }
                );
        });

    }
}