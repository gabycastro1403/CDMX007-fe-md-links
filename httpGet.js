const getHttp= (linksArray) => {
    //console.log(linksArray);
    linksArray.forEach(element => {
        if (element.match(/(https:\/\/[^\s]+)/g)){
            const https = require('https');
            https.get(element, (res) => {
            console.log(element,'statusCode:', res.statusCode);
            }).on('error', (e) => {
            console.error(e);
            });
            
    }else if(element.match(/(http:\/\/[^\s]+)/g)) {
        const http = require('http');
        http.get(element, (res) => {
        console.log(element,'statusCode:',res.statusCode);
        }).on('error', (e) => {
        console.error(e);
        });

    } 
    })
}

module.exports = {
    getHttp
}