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
//Funcion de ruta de archivo y obtiene el contenido del mismo

const pathInput = process.argv[2] 
//console.log(process.argv);

if(path.extname(pathInput) === ".md"){
fileManager.readFile(pathInput, (data)=>{
  //console.log(data);
  const linksMd = searchLinks.searchLinks(data);
  // console.log(linksMd);
  const validateLink = httpGet.getHttp(linksMd);
  console.log(validateLink);
  // const validate2 = validate.validate(validateLink);
  // console.log(validate2);
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
      // const validateLink= httpGet.getHttp(linksMd)
      // const validate2 = validate.validate(validateLink);
        })
 }); 
});
}
