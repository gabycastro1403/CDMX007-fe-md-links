
const colors = require('colors');
const links =  (arrayValidate,path) => {
    console.log(arrayValidate);
    arrayValidate.forEach(element => {
        if (element.status >=400){
            console.log(`${colors.blue(path)} ${colors.red(element.link)} ${colors.yellow(element.status)} Fail`)
        }else{
            console.log(`${colors.blue(path)} ${colors.cyan(element.link)} ${colors.green(element.status)} OK`)
        }
        
    });

}


module.exports = {
    links
}