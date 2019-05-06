const index = require('./index.js');
const fixtures = require('./test/fixtures.js')



const file = 'readme.md';
const directory = './test';
const directory2 = '../'

const non = 'djdjdjd.js';


const arrayDirectoryNoMd = [ 'fixtures.js', 'md-links.spec.js', 'testing-folder' ];

// index.mdLinks(directory)
//     .then(res => console.log(res))
//     .catch(err => console.error(err))


index.statusUrl('https://nodejs.org/api/fs.html')
    .then(res => console.log(res))
    .catch(err => console.log(err))
