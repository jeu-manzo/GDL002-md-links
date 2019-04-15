const mdLinks = require('../');


describe('mdLinks', () => {

  //Check argument is not being pass
  it('should output "error: path is needed"', () => {
    expect(mdLinks.mdLinks()).toBe('error: path is needed');
  });

  //Check argumnt is be pass
  it('should output "docs/example.md"', () => {
    expect(mdLinks.mdLinks('docs/example.md')).toBe('docs/example.md');
  });


});
