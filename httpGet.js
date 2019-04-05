const colors = require('colors');
const getHttp= (linksArray) => {
     const fetch = require('node-fetch');
     //let resolveLinks = 0;
    linksArray.forEach(element => {
        //const arrayLinksValidated = [];
        fetch(element)
        .then(response => {
            //const validateLink = `link:${colors.blue(element)} ${colors.cyan(response.status)} ${colors.green(response.statusText)}`;
            console.log(`link:${colors.blue(element)} ${colors.cyan(response.status)} ${colors.green(response.statusText)}`);
            //arrayLinks.push(validateLink);
            //resolveLinks += 1;
            // if(linksArray.length == resolveLinks){
            //     return arrayLinksValidated
            // }
        })
        .catch(error => {
            //const errorLink = `link:${colors.yellow(element)} ${colors.red(error.status)} ${colors.red(error.statusText)}`;
            console.log(`link:${colors.yellow(element)} ${colors.red(error.status)} ${colors.red(error.statusText)}`);
            // arrayLinksValidated.push( errorLink);
            // resolveLinks += 1;
            // if(linksArray.length == resolveLinks){
            //     return arrayLinksValidated
            // }
        });
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
    
}


module.exports = {
    getHttp
}