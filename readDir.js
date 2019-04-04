
 const readdir = (dirPath,callback) => {
    let fs = require('fs');
    fs.readdir(dirPath,(error,list)=>{
      
        callback(list);
       
      if(error){
        console.log('error', error);
      }
    })
  };


  module.exports={
    readdir
  }


