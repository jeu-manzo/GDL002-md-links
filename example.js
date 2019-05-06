const index = require('./index.js');



const file = 'readme.md';
const directory = './test';
const directory2 = '../'

const non = 'djdjdjd.js';

// index.mdLinks(directory)
//     .then(res => console.log(res))
//     .catch(err => console.error(err))


index.readDirectory(non)
.then(res => console.log(res))
.catch(err => console.error(err))
