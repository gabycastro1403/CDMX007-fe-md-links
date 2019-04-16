const mdLinks = require('../searchLinks');
const parser = require('../parser');
const readDir = require('../readDir');
const fileManager = require('../fileManager');
const stats = require ('../stats');


//Moqueo
const filesArray = ['cli.js','httpGet.js','readDir.js','README.md','Readme14.md'];
const filesFilter = ['README.md','Readme14.md'];
const readmeTest = 'este  es un Readme de prueba para que saque los links que contiene a continuacion[Node.js](https://nodejs.org/en/).[módulos (CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html).[file system](https://nodejs.org/api/fs.html).[path](https://nodejs.org/api/path.html)';
const linksTest = ['https://nodejs.org/en/','https://nodejs.org/docs/latest-v0.10.x/api/modules.html','https://nodejs.org/api/fs.html','https://nodejs.org/api/path.html'];
const dirFilesTest = ['.DS_Store',
'.editorconfig',
'.eslintrc',
'.git',
'.gitignore',
'README.md',
'Readme14.md',
'cli.js',
'fileManager.js',
'httpGet.js',
'index.js',
'node_modules',
'package-lock.json',
'package.json',
'parser.js',
'readDir.js',
'searchLinks.js',
'test' ]
const dataTest = '## holaEste es el segundo readme [NODE.js](https://nodejs.org/api/https.html).'
//const validateLinksTest = ['https://nodejs.org/en/ statusCode:200','https://nodejs.org/docs/latest-v0.10.x/api/modules.html statusCode:200','https://nodejs.org/api/fs.html statusCode:200','https://nodejs.org/api/path.html statusCode:200']
const linkStats = [{ link: 'https://otra-cosa.net/algun-doc.html', status: 443 },
{ link: 'https://otra-cosa.net/algun-doc.html', status: 443 },
{ link: 'https://nodejs.org/en/', status: 200 },
{ link: 'https://nodejs.org/api/fs.html', status: 200 },
{ link: 'https://nodejs.org/api/path.html', status: 200 },
{ link: 'https://en.wikipedia.org/wiki/Parsing', status: 200 },
{ link: 'http://algo.com/2/3/', status: 301 },
{ link: 'https://semver.org/', status: 200 },
{ link: 'http://google.com/', status: 301 },
{ link: 'http://google.com/', status: 301 },
{ link: 'https://jestjs.io/', status: 200 },
{ link: 'http://algo.com/2/3/', status: 301 },
{ link: 'https://developers.google.com/v8/', status: 301 },
{ link: 'https://docs.npmjs.com/misc/scripts', status: 200 }];
const objectResult = {Fyle : 'README.md',total: 14 };

describe('mdLinks deberia ser una funcion', () => {

  it('deberia ser una funcion', () => {
    expect(typeof mdLinks.searchLinks).toBe('function');
  });
  it('deberia retornar los links dentro del archivo',() => {
    expect(mdLinks.searchLinks(readmeTest)).toEqual(expect.arrayContaining(linksTest));
  })

});

describe( 'parser deberia ser una funcion',() => {
  it('deberia ser una funcion',()=>{
  expect(typeof parser.searchMd).toBe('function');
  })
  it('deberia retornar los archivos con .md',()=>{
    expect(parser.searchMd(filesArray)).toEqual(filesFilter);
  })
});

describe('readDir deberia ser una funcion', () => {
  it ('deberia ser una funcion', () => {
    expect(typeof readDir.readdir).toBe('function');
  })
  it('deberia retornar la lista de archivos de una carpeta', () => {
    readDir.readdir('../CDMX007-FE-MD-LINKS', (links) =>{
      expect(links).toEqual(expect.arrayContaining(dirFilesTest));
    })
  })
});

describe('fileManager', () => {
  it('deberia ser una funcion', () => {
    expect(typeof fileManager.readFile).toEqual('function');
  })
  it('deberia de retornar el contenido del archivo', () => {
    fileManager.readFile('../Readme14.md',(data)=>{
      expect(data).toEqual(dataTest);
    })
  })
});

describe('stats', () => {
  it('deberia ser una función', () => {
    expect(typeof stats.stats).toEqual('function');
  })
  it( 'deberia retornar el largo del arreglo con los objetos de los links', () => {
    expect(stats.stats(linkStats,'README.md')).toEqual(objectResult);
  })
});





