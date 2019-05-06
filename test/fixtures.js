const stringFile =
    `Diseñar tu propia librería es una experiencia fundamental para cualquier
    desarrollador porque que te obliga a pensar en la interfaz (API) de tus
    _módulos_ y cómo será usado por otros developers. Debes tener especial
    consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

    Tópicos:

    - [Node.js](https://nodejs.org/en/).
    - [módulos (CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html).
    - [file system](https://nodejs.org/api/fs.html).
    - [path](https://nodejs.org/api/path.html).
    - [http.get](https://nodejs.org/api/http.html#http_http_get_options_callback).
    - [Parsing](https://en.wikipedia.org/wiki/Parsing).
    - [markdown](https://daringfireball.net/projects/markdown/syntax).
    - [CLI](https://www.proyectobyte.com/windows/simbolo-del-sistema/uso-la-interfaz-linea-comandos).
    - [npm-scripts](https://docs.npmjs.com/misc/scripts).
    - [semver](https://semver.org/).
    - https://nofunction.com
`;

const arrayDirectory = ['fixtures.js', 'md-links.spec.js', 'test-file.md', 'testing-folder'];

const arrayDirectoryNoMd = [ 'fixtures.js', 'md-links.spec.js', 'testing-folder' ];

const setUrls = new Set ([
  'https://nodejs.org/en/)',
  'https://nodejs.org/docs/latest-v0.10.x/api/modules.html)',
  'https://nodejs.org/api/fs.html)',
  'https://nodejs.org/api/path.html)',
  'https://nodejs.org/api/http.html#http_http_get_options_callback)',
  'https://en.wikipedia.org/wiki/Parsing)',
  'https://daringfireball.net/projects/markdown/syntax)',
  'https://proyectobyte.com/windows/simbolo-del-sistema/uso-la-interfaz-linea-comandos)',
  'https://docs.npmjs.com/misc/scripts)',
  'https://semver.org/)',
  'https://nofunction.com'
]);

const fixedSetUrls = [ 'https://nodejs.org/en/',
  'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
  'https://nodejs.org/api/fs.html',
  'https://nodejs.org/api/path.html',
  'https://nodejs.org/api/http.html#http_http_get_options_callback',
  'https://en.wikipedia.org/wiki/Parsing',
  'https://daringfireball.net/projects/markdown/syntax',
  'https://proyectobyte.com/windows/simbolo-del-sistema/uso-la-interfaz-linea-comandos',
  'https://docs.npmjs.com/misc/scripts',
  'https://semver.org/',
  'https://nofunction.com'];

module.exports = {
    stringFile,
    arrayDirectory,
    arrayDirectoryNoMd,
    setUrls,
    fixedSetUrls
};
