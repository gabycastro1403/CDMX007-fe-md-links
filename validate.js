

const links =  (arrayValidate,path) => {
    console.log(arrayValidate);
    arrayValidate.forEach(element => {
        if (element.status >=400){
            console.log(`${path} ${element.link} ${element.status} Fail`)
        }else{
            console.log(`${path} ${element.link} ${element.status} OK`)
        }
        
    });

}


module.exports = {
    links
}