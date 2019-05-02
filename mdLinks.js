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






    // validate (path) {
    //     fs.readFile(path, (err, data) => {
    //         if (err) throw err;
    //         this.checkLinks(data)
    //         return true

    //     });
    // },

    // checkLinks (data) {
    //     // logica para encontrar links en data
    // }
};


module.exports = mdLinks;
