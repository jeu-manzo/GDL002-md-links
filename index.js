const fs = require('fs');
const path = require('path');
const getUrls = require('get-urls');



//Verificar estatus del path
function statusPath (path) {
    return new Promise((resolve, reject) => {
        fs.lstat(path, (err, stats) => {
            if (err) {
                reject(err)
            }
            resolve(stats)
        });
    })
}

//Lee todos los archivos de un directorio
function readDirectory (directory) {
    return new Promise((resolve, reject) => {
        fs.readdir(directory, (err, data) => {
            if (err)
              reject(err);

           resolve(data)
        });
    })
}

//Recibe un array y busca el archivo con extension md
function findExtMd (files) {
    return new Promise(function(resolve, reject) {
        files.forEach(function(file) {
            const ext = path.extname(file);
            if (ext === '.md') {
                resolve(file);
            }
        });
    });
}

//Solo lee archivos (cualquier extension)
function readFile (file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err)
                reject(err);
            const dataString = data.toString();
            resolve(dataString);
        })
    })
}

//Extraer todas la getUrls
function getUrl (text) {
    return getUrls(text)
}


async function mdLinks (path) {
    try {
        const stats = await statusPath(path)
        let result = null

        if (stats.isDirectory()) {
            const readDir = await readDirectory(path);
            const extMd = await findExtMd(readDir);
            const fileConvert = path + '/' + extMd;
            const readFileString = await readFile(fileConvert);
            result = getUrl(readFileString)
        } else {
            result = await readFile(path)
        }

        return result
    } catch (err) {
        console.log('error', err)
    }
}

module.exports = mdLinks;
