//función que valida los links 
const colors = require('colors');
const getHttp=  async (linksArray) => {
const promise =  new Promise((resolve, reject) =>{
    const validateLinks = [];
    let counting = 0;

         linksArray.forEach(element => {
        if (element.match(/(https:\/\/[^\s]+)/g)){
            const https = require('https');
            https.get(element, (res) => {
            validateLinks.push({link:element, status:res.statusCode})
            counting+=1
            if(linksArray.length==counting){
            resolve(validateLinks);
            }
            }).on('error', (res) => {
            validateLinks.push({link:element, status:res.port});
            counting++
            if(linksArray.length==counting){
            resolve(validateLinks);
            }
            })
            }else{
                const http = require('http');
                http.get(element, (res) => {
                validateLinks.push({link:element, status:res.statusCode});
                counting++
                if(linksArray.length==counting){
                resolve(validateLinks);
                }
                }).on('error', (res) => {
                validateLinks.push({link:element, status:res.port});
                counting++
                if(linksArray.length==counting){
                resolve(validateLinks);
                }
            });
        }
     })
   
    })
    const result = await promise
     console.log(result)
    return result
 }

module.exports = {
    getHttp
}