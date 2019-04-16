#!/usr/bin/env node

const fileManager = require('./fileManager');
const parser = require('./parser');
const findDir = require('./readDir');
const searchLinks = require('./searchLinks');
const httpGet = require('./httpGet');
const validate = require('./validate')
const stats = require('./stats');
const path = require('path');
const fs = require('fs');
const pathInput = process.argv[2];

if (process.argv[3] == '--validate'){
  fileManager.readFile(pathInput, (data)=>{
    const linksMd = searchLinks.searchLinks(data)
    httpGet.getHttp(linksMd)
    .then(resp => {
      console.log(validate.links(resp,pathInput))})
  });
}else if(process.argv[3] == '--stats'){
  fileManager.readFile(pathInput, (data)=>{
    const linksMd = searchLinks.searchLinks(data)
    httpGet.getHttp(linksMd)
    .then(resp => {
      const statsLinks = stats.stats(resp,pathInput)
      console.log(statsLinks)})
      .catch(error => console.log(error))
      
  })
  
}else if(path.extname(pathInput) === ".md"){
fileManager.readFile(pathInput, (data)=>{
  const linksMd = searchLinks.searchLinks(data)
  console.log(linksMd);
  console.log(process.argv);
})
} else if(fs.lstatSync(pathInput).isDirectory()){

//Funcion de ruta de directorio y obtiene el contenido y los links del mismo   
findDir.readdir(pathInput,(list)=>{
  const result =  parser.searchMd(list)
  result.forEach(element => {
  fileManager.readFile(element, (data) => {
    const linksMd = searchLinks.searchLinks(data)
    console.log(linksMd);
       
  })
 }) 
});
}

