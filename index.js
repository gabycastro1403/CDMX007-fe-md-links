const fileManager = require('./fileManager');
const parser = require('./parser');
const findDir = require('./readDir');
const searchLinks = require('./searchLinks');
const httpGet = require('./httpGet');

//Funcion de ruta de archivo y obtiene el contenido del mismo
// fileManager.readFile('./README.md', (data)=>{
//   //console.log(data);
//   const linksMd = searchLinks.searchLinks(data);
//   //console.log(linksMd);
//   const validateLink = httpGet.getHttp(linksMd);
//   console.log(validateLink);
// });

//Funcion de ruta de directorio y obtiene el contenido y los links del mismo   
findDir.readdir('./',(list)=>{
  const result =  parser.searchMd(list)
  //console.log(list);
  result.forEach(element => {
  fileManager.readFile(element, (data) => {
      const linksMd = searchLinks.searchLinks(data);
      //console.log(linksMd);
      const validateLink= httpGet.getHttp(linksMd)
      console.log(validateLink);
  })
 }); 
});
