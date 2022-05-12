const fs = require('fs');
const { resolve } = require('path');

module.exports = [
    {
        key: 'v2-template',
        prefix: 'v2-template',
        body: fs.readFileSync(resolve(__dirname, './v2-template.vue'), 'utf-8'),
        description: ''
    },
    {
        key: 'v3-template',
        prefix: 'v3-template',
        body: fs.readFileSync(resolve(__dirname, './v3-template.vue'), 'utf-8'),
        description: ''
    },
    {
        key: 'v3-template-setup',
        prefix: 'v3-template-setup',
        body: fs.readFileSync(resolve(__dirname, './v3-template-setup.vue'), 'utf-8'),
        description: ''
    }
];

