const fs = require('fs');
const { resolve, parse } = require('path');

module.exports = [
    {
        key: 'v2-template',
        prefix: 'v2-template',
        body: fs.readFileSync(resolve(__dirname, './v2-template.vue'), 'utf-8'),
        parser: 'vue',
        description: ''
    },
    {
        key: 'v2-setup-template',
        prefix: 'v2-setup-template',
        body: fs.readFileSync(resolve(__dirname, './v2-setup-template.vue'), 'utf-8'),
        parser: 'vue',
        description: ''
    },
    {
        key: 'v2-tsx-template',
        prefix: 'v2-tsx-template',
        body: fs.readFileSync(resolve(__dirname, './v2-tsx-template.vue'), 'utf-8'),
        parser: 'vue',
        description: ''
    },
    {
        key: 'v3-tsx-vue-template',
        prefix: 'v3-tsx-vue-template',
        body: fs.readFileSync(resolve(__dirname, './v3-tsx-vue-template.vue'), 'utf-8'),
        parser: 'vue',
        description: ''
    },
    {
        key: 'v3-tsx-tsx-template',
        prefix: 'v3-tsx-tsx-template',
        body: fs.readFileSync(resolve(__dirname, './v3-tsx-tsx-template.tsx'), 'utf-8'),
        parser: 'typescript',
        description: ''
    },
    {
        key: 'v3-setup-template',
        prefix: 'v3-setup-template',
        body: fs.readFileSync(resolve(__dirname, './v3-setup-template.vue'), 'utf-8'),
        parser: 'vue',
        description: ''
    }
];

