const index = require('./index.js');



const file = 'readme.md';
const directory = './test';
const directory2 = '../'

const non = 'djdjdjd.js';


const arrayDirectoryNoMd = [ 'fixtures.js', 'md-links.spec.js', 'testing-folder' ];
// index.mdLinks(directory)
//     .then(res => console.log(res))
//     .catch(err => console.error(err))


index.readDirectory('./test/testing-folder')
    .then(res => index.findExtMd(res)
        .then(aaa => console.log(aaa))
        .catch(aaa => console.log(aaa)))
    .catch(err => console.error(err))


    index.findExtMd(arrayDirectoryNoMd)
        .then(res => console.log(res))
        .catch(err => console.error(err))
