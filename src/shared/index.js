const fs = require('fs');
const path = require('path');

const isFile = () => {
    return fs.lstatSync(path).isFile();
};

const isDir = path => {
    return fs.lstatSync(path).isDirectory();
};

const getFiles = (dirs, result = []) => {
    fs.readdirSync(dirs).forEach(dir => {
        const scanDir = path.join(dirs, dir);
        if (isDir(scanDir)) {
            getFiles(scanDir, result);
        } else {
            result.push({
                filePath: scanDir,
                fileName: dir
            });
        }
    });
    return result;
};

const getSnippetsRoot = (template = []) => {
    return template.reduce((result, item) => {
        result.push({
            key: item.fileName.replace('.vue', ''),
            prefix: item.fileName.replace('.vue', ''),
            body: fs.readFileSync(item.filePath, 'utf-8'),
            parser: 'vue',
            description: ''
        });
        return result;
    }, []);
};

module.exports = {
    isFile,
    isDir,
    getFiles,
    getSnippetsRoot
};

