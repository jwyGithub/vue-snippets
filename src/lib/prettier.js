const prettier = require('prettier');

module.exports = (html, parser) =>
    prettier.format(html, {
        arrowParens: 'avoid',
        bracketSpacing: true,
        endOfLine: 'crlf',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxSingleQuote: true,
        printWidth: 200,
        proseWrap: 'never',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 4,
        trailingComma: 'none',
        useTabs: false,
        parser: parser
    });

