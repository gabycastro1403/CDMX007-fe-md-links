
const readFile = (filePath, callback) => {
    //método para acceder al fichero
    let fs = require('fs');
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error){
        return('error', error);
      }else{
        callback(data);
      }
    })
    };

   
    
  
    module.exports = {
      readFile
    }

   
  