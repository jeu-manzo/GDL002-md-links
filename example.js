const mdLinks = require('./mdlinks');

// test('pass validation single file', () => {
//     const path = './path/to/my/file'
//     const validation = mdLinks.validate(path)

//     expect(validation).toBe(true)
// })

const file = 'mdLinks.js';
const directory = './test';
const non = 'djdjdjd.js';

mdLinks.statusPath(file);
// mdLinks.readFile(file);
