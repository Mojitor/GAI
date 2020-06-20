grammar gai;

schema:
	include* (
		namespace_decl
		| interface_decl
		| struct_decl
		| enum_decl
	)*;

include: 'include' STRING_CONSTANT ';';

namespace_decl: 'namespace' IDENT ( '.' IDENT)* ';';

interface_decl: 'interface' IDENT '{' (func_decl)* '}';

func_decl: type IDENT '(' formal_parameters? ')' ';';

formal_parameters: type IDENT (',' type IDENT)*;

type:
	type '[' ']'		# array_type
	| BASE_TYPE_NAME	# base_type
	| ns_ident			# ns_type;

struct_decl: 'struct' IDENT '{' field_decl* '}';

field_decl: type IDENT ';';

enum_decl: 'enum' IDENT '{' enum_filed (',' enum_filed)* '}';

enum_filed: IDENT ('=' integer_const)?;

integer_const: INTEGER_CONSTANT | HEX_INTEGER_CONSTANT;

ns_ident: IDENT ( '.' IDENT)*;

STRING_CONSTANT: '"' ~["\r\n]* '"';

BASE_TYPE_NAME:
	'bool'
	| 'byte'
	| 'ubyte'
	| 'short'
	| 'ushort'
	| 'int'
	| 'uint'
	| 'float'
	| 'long'
	| 'ulong'
	| 'double'
	| 'int8'
	| 'uint8'
	| 'int16'
	| 'uint16'
	| 'int32'
	| 'uint32'
	| 'int64'
	| 'uint64'
	| 'float32'
	| 'float64'
	| 'string';

IDENT: [a-zA-Z_] [a-zA-Z0-9_]*;

HEX_INTEGER_CONSTANT: [-+]? '0' [xX][0-9a-fA-F]+;

INTEGER_CONSTANT: [-+]? [0-9]+ | 'true' | 'false';

FLOAT_CONSTANT:
	'-'? [0-9]+ '.' [0-9]+ (('e' | 'E') ('+' | '-')? [0-9]+)?;

BLOCK_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

// fixed original grammar: allow line comments
COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);

WHITESPACE: [ \t\r\n] -> skip;