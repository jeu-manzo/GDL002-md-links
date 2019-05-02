const mdLinks = require('./index.js');



const file = 'readme.md';
const directory = './test';
const non = 'djdjdjd.js';

mdLinks(file)
    .then(res => console.log(res))
    .catch(err => console.error(err))
