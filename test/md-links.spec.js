const mdLinks = require('../index.js');
const fixtures = require('./fixtures.js');


describe('mdLinks', () => {

    test('should output the string of the file', () => {
      return mdLinks.readFile(`${__dirname}/test-file.md`).then(data => {
        expect(data).toBe(fixtures.stringFile);
      });
    });

    test("should be an error 'ENOENT: no such file or directory, open './no-file.md''", () => {
        return mdLinks.readFile('./no-file.md').catch(err => {
            console.log(err);
            expect(err.message).toBe("ENOENT: no such file or directory, open './no-file.md'");
        });
    });

    test('should be true', () => {
      return mdLinks.statsPath(`${__dirname}`).then(data => {
        expect(data).toBe(true);
      });
    });

    test("should be an error 'ENOENT: no such file or directory, lstat './no-file.md''", () => {
        return mdLinks.statsPath('./no-file.md').catch(err => {
            console.log(err);
            expect(err.message).toBe("ENOENT: no such file or directory, lstat './no-file.md'");
        });
    });


});
