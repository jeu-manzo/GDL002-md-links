let path = "package.json";


function mdLinks(path, option)
  .then(pathExist)
  .then(verifePath)
  .then(absolutePath)
  .then(directoryPath)
  .then(fileMD)
  .then(readFileMD)
  .then(findLinks)
  .then(extractLinks)
  .then(verifeStatusLinks)
  .catch(function(err){
        funcion(err)
        //funcion error
    })

function pathExist(path) {
  if (path) {
    return path;
  }else {
    return "error: path is needed";
  }
}

fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

function foo () {
  return new Promise(function (resolve, reject) {
    resolve(true)
  })
}

foo().then(function (value) {
  console.log('vallll' + value)
})

//

const foo = () => new Promise((resolve) => resolve(true))

foo().then(value => console.log(value))
