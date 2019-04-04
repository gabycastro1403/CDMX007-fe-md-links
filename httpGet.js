const colors = require('colors');
//const arrayLinks = [];
const getHttp= (linksArray) => {
    
     const fetch = require('node-fetch');
    
    linksArray.forEach(element => {
        fetch(element)
        .then(response => {
            //const validateLink = `link:${colors.blue(element)} ${colors.cyan(response.status)} ${colors.green(response.statusText)}`;
            console.log(`link:${colors.blue(element)} ${colors.cyan(response.status)} ${colors.green(response.statusText)}`);
            //arrayLinks.push(validateLink);
        })
        .catch(error => {
            //const errorLink = `link:${colors.yellow(element)} ${colors.red(error.status)} ${colors.red(error.statusText)}`;
            console.log(`link:${colors.yellow(element)} ${colors.red(error.status)} ${colors.red(error.statusText)}`);
            //arrayLinks.push( errorLink);
        })
       
        // if (element.match(/(https:\/\/[^\s]+)/g)){
        //     const https = require('https');
        //     https.get(element, (res) => {
        //     console.log(`link:${colors.blue(element)} ${colors.green(res.statusCode)} Ok`);
        //     }).on('error', (res) => {
        //     console.error(`link:${colors.yellow(element)} ${colors.red(res.port)} Fail`);
        //     });
        //     }else{
        //         const http = require('http');
        //         http.get(element, (res) => {
        //         console.log(`link:${colors.blue(element)} ${colors.green(res.statusCode)}Ok`);
        //         }).on('error', (res) => {
        //         console.error(`link:${colors.yellow(element)} ${colors.red(res.port)}Fail`);
        //     });
        // }
        
    })
    //return arrayLinks;
}


module.exports = {
    getHttp
}