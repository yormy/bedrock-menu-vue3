module. exports = {
    // maximum number of characters in a line
    printWidth:  150,
    // Specify the number of spaces per indentation level
    tabWidth:  4,
    // use tabs instead of spaces to indent lines
    useTabs:  false,
    // Do you need a semicolon at the end of the statement
    semi:  true,
    // whether to use single quotes
    singleQuote:  true,
    // Change the time optional value of the reference object property"<as-needed|consistent|preserve> "
    quoteProps:  'as-needed',
    // use single quotes instead of double quotes in JSX
    jsxSingleQuote:  false,
    // Print trailing commas when possible on multiple lines. (For example, single-line arrays will never have a trailing comma.) optional"<none|es5|all> ", default none
    trailingComma:  'es5',
    // print spaces between parentheses in object literals
    bracketSpacing:  true,
    // include parentheses around individual arrow function arguments always: (x) => x \ avoid: x => x
    arrowParens:  'always',
    // These two options can be used to format code that starts and ends at a given character offset (included and excluded respectively)
    rangeStart:  0,
    rangeEnd:  Infinity,
    // Specify the parser to use, no need to write @prettier at the beginning of the file
    requirePragma:  false,
    // no need to automatically insert @prettier at the beginning of the file
    insertPragma:  false,
    // use default wrapping standard always\never\preserve
    proseWrap:  'preserve',
    // Specify global whitespace sensitivity for HTML files css\strict\ignore
    htmlWhitespaceSensitivity:  'css',
    // Vue file script and style tag indentation
    vueIndentScriptAndStyle:  false,
    //In the Windows operating system, the newline is usually a carriage return (CR) plus a newline separator (LF), that is, carriage return and linefeed (CRLF),
    // However in Linux and Unix only the simple newline separator (LF) is used.
    //The corresponding control characters are "\n" (LF) and "\r\n" (CRLF). auto means keep existing line endings
    // newline character ending with lf is optional"<auto|lf|crlf|cr> "
    endOfLine:  'auto',
};
