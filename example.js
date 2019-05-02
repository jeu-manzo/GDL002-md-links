const mdLinks = require('./index.js');



const file = 'index.js';
const directory = './test';
const non = 'djdjdjd.js';

mdLinks(directory)
    .then(res => console.log(res))
    .catch(err => console.error(err))
