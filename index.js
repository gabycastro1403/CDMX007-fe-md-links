#!/usr/bin/env node

const fileManager = require('./fileManager');
const parser = require('./parser');
const findDir = require('./readDir');
const searchLinks = require('./searchLinks');
const httpGet = require('./httpGet');
const validate = require('./validate')
const colors = require('colors');
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
}else if(path.extname(pathInput) === ".md"){
fileManager.readFile(pathInput, (data)=>{
  //console.log(data);
  const linksMd = searchLinks.searchLinks(data)
  console.log(linksMd);
  console.log(process.argv);
})
} else if(fs.lstatSync(pathInput).isDirectory()){

//Funcion de ruta de directorio y obtiene el contenido y los links del mismo   
findDir.readdir(pathInput,(list)=>{
  
  const result =  parser.searchMd(list)
  //console.log(list);
  result.forEach(element => {
  fileManager.readFile(element, (data) => {
    const linksMd = searchLinks.searchLinks(data)
    console.log(linksMd);
       
  })
 }) 
});
}

