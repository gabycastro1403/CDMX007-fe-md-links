const mdLinks = require('../searchLinks');
const parser = require('../parser');

const filesArray = ['cli.js','httpGet.js','readDir.js','README.md','Readme14.md'];
const filesFilter = ['README.md','Readme14.md'];
const readmeTest = 'este  es un Readme de prueba para que saque los links que contiene a continuacion[Node.js](https://nodejs.org/en/).[módulos (CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html).[file system](https://nodejs.org/api/fs.html).[path](https://nodejs.org/api/path.html)';
const linksTest = ['https://nodejs.org/en/','https://nodejs.org/docs/latest-v0.10.x/api/modules.html','https://nodejs.org/api/fs.html','https://nodejs.org/api/path.html'];



  
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


