const fileManager = require('./fileManager');
const parser = require('./parser');
const findDir = require('./readDir');
const searchLinks = require('./searchLinks');

// fileManager.readFile('./README.md', (data)=>{
//   console.log(data);
// });

findDir.readdir('./',(list)=>{
  console.log(list);
 const result =  parser.searchMd(list)
 result.forEach(element => {
 fileManager.readFile(element, (data) => {
    //console.log(data);
    const linksMd = searchLinks.searchLinks(data);
    console.log(linksMd);
  })
 }); 
});
