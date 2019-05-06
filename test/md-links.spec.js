const mdLinks = require('../index.js');
const fixtures = require('./fixtures.js');


describe('mdLinks', () => {

    test('should be true', () => {
      return mdLinks.statsPath(`${__dirname}`).then(data => {
        expect(data).toBe(true);
      });
    });

    test("should be an error: 'ENOENT: no such file or directory, lstat './no-file.md''", () => {
        return mdLinks.statsPath('./no-file.md').catch(err => {
            expect(err.message).toBe("ENOENT: no such file or directory, lstat './no-file.md'");
        });
    });

    test('should be an array of files of the directory "test"', () => {
      return mdLinks.readDirectory(`${__dirname}`).then(data => {
        expect(data).toEqual(fixtures.arrayDirectory);
      });
    });

    test("should be an error: 'ENOENT: no such file or directory, scandir './no-file.md''", () => {
        return mdLinks.readDirectory('./no-file.md').catch(err => {
            expect(err.message).toBe("ENOENT: no such file or directory, scandir './no-file.md'");
        });
    });

    test('should output "test-file.md"', () => {
      return mdLinks.findExtMd(fixtures.arrayDirectory).then(data => {
        expect(data).toBe('test-file.md');
      });
    });

    test('Should output: No file ".md" found', () => {
        return mdLinks.findExtMd(fixtures.arrayDirectoryNoMd).catch(err => {
            expect(err).toBe('No file ".md" found');
        });
    });

    test('should output the string of the file', () => {
      return mdLinks.readFile(`${__dirname}/test-file.md`).then(data => {
        expect(data).toBe(fixtures.stringFile);
      });
    });

    test("should be an error: 'ENOENT: no such file or directory, open './no-file.md''", () => {
        return mdLinks.readFile('./no-file.md').catch(err => {
            expect(err.message).toBe("ENOENT: no such file or directory, open './no-file.md'");
        });
    });

    test('should output all the links from test-file.md', () => {
      expect(mdLinks.getUrl(fixtures.stringFile)).toEqual(fixtures.setUrls);
    });

    test("should output an array without the final ')' of each link", () => {
      return mdLinks.changeLinksCorrupt(fixtures.setUrls).then(data => {
        expect(data).toEqual(fixtures.fixedSetUrls);
      });
    });


});
