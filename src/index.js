const fs = require('fs');
const path = require('path');
const prettier = require('./lib/prettier');

const { getFiles, getSnippetsRoot } = require('./shared/index');

const TEMPLATE_ROOT = path.resolve(__dirname, './template');
const snippetsJSONRoot = path.resolve(__dirname, '../snippets/snippets.code-snippets');

const templateFiles = getFiles(TEMPLATE_ROOT);
const snippetsRoot = getSnippetsRoot(templateFiles);

const format = ({ key, prefix, body, description }) => {
    return {
        [key]: {
            prefix,
            body: body,
            description
        }
    };
};

const generator = () => {
    try {
        const snippetsConfig = snippetsRoot.map(item => {
            item.body = prettier(item.body, item.parser);
            return item;
        });

        let snippets = snippetsConfig.reduce((pre, item) => {
            pre = { ...pre, ...format(item) };
            return pre;
        }, {});

        fs.writeFileSync(snippetsJSONRoot, JSON.stringify(snippets, null, 4));
    } catch (error) {
        console.log(error);
    }
};

generator();

