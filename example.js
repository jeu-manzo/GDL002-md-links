const index = require('./index.js');
const fixtures = require('./test/fixtures.js')



const file = 'readme.md';
const directory = './test';
const directory2 = '../'

const non = 'djdjdjd.js';


const arrayDirectoryNoMd = [ 'fixtures.js', 'md-links.spec.js', 'testing-folder' ];
// index.mdLinks(file)
//     .then(res => console.log(res))
//     .catch(err => console.error(err))

//
// index.readFile('./test/test-file.md')
//     .then(res => index.extractor(res)
//         .then(aaa => console.log(aaa))
//         .catch(err => console.log(err)))
//     .catch(err => console.error(err))
//
//
    // index.extractor(fixtures.stringFile)
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err))


    // index.changeLinksCorrupt(fixtures.setUrls)
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err))

// fixtures.setUrls.forEach(function(link) {
//   const linkCorrupt = link.endsWith(")");
//   if (linkCorrupt === true) {
//       const newStr = link.slice(0, -1);
//       console.log(newStr);
//   }else {
//       console.log(link);
//   }
// });
