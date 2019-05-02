const fs = require('fs');


const mdLinks = {
    statusPath (path) {
        fs.lstat(path, (err, stats) => {
            if(err){
                console.log('Does not exist');  //Handle error
            }else if(stats.isDirectory()) {
                //mostrar archivos md
                console.log('is directory');
            }else {
                //manejar file
                console.log('is file');   
            }
        });   
    }

    
    
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