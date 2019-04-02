
 const readdir = (dirPath,callback) => {
    let fs = require('fs');
    fs.readdir(dirPath,(error,list)=>{
      if(error){
        console.log('error', error);
      }else{
        callback(list);
      }
    })
  };


  module.exports={
    readdir
  }


