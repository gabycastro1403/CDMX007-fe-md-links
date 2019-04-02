const fileManager = require('./fileManager');
const parser = require('./parser');
const findDir = require('./readDir');
const searchLinks = require('./searchLinks');

//Funcion de ruta de archivo y obtiene el contenido del mismo
fileManager.readFile('./README.md', (data)=>{
  //console.log(data);
  const linksMd = searchLinks.searchLinks(data);
  console.log(linksMd);
});

//Funcion de ruta de directorio y obtiene el contenido y los links del mismo   
findDir.readdir('./',(list)=>{
  const result =  parser.searchMd(list)
  result.forEach(element => {
  fileManager.readFile(element, (data) => {
      const linksMd = searchLinks.searchLinks(data);
      console.log(linksMd);
    })
 }); 
});
