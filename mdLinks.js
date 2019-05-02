const fs = require('fs');
const path = require('path');


const mdLinks = {
    statusPath (path) {
        fs.lstat(path, (err, stats) => {
            if(err){
                console.log('Path does not exist');  //Handle error
            }else if(stats.isDirectory()) {
                //mostrar archivos md
                console.log('is directory');
                return this.readDirectory(path);
            }else {
                //manejar file
                console.log('is file');
                return this.readFile(path);
            }
        });
    },

    readDirectory (directory) {
        fs.readdir(directory, (err, data) => {
          if (err)
            return console.log(err);

        return this.findExtMd(data);
        });
    },

    findExtMd (files) {
        files.forEach(function(file) {
            const ext = path.extname(file);
            if (ext === '.md') {
                return file;
            }
        });
    },

    readFile (file) {
        fs.readFile(file, (err, data) => {
            if (err)
                return console.log(err);
            const dataString = data.toString();
            console.log(dataString);
        })
    },






};


module.exports = mdLinks;
