const colors = require('colors');
const getHttp= (linksArray) => {
    linksArray.forEach(element => {
        if (element.match(/(https:\/\/[^\s]+)/g)){
            const https = require('https');
            https.get(element, (res) => {
            console.log(`link:${colors.blue(element)} ${colors.green(res.statusCode)} Ok`);
            }).on('error', (res) => {
            console.error(`link:${colors.yellow(element)} ${colors.red(res.port)} Fail`);
            });
            }else{
                const http = require('http');
                http.get(element, (res) => {
                console.log(`link:${colors.blue(element)} ${colors.green(res.statusCode)}Ok`);
                }).on('error', (res) => {
                console.error(`link:${colors.yellow(element)} ${colors.red(res.port)}Fail`);
            });
        }
    })
}

module.exports = {
    getHttp
}