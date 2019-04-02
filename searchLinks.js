const searchLinks = (data) => {
    const caracter = ")";
    const linksEnd = /https/g;
    //const expReg = new RegExp(linksEnd);
    const links = data.match(linksEnd,caracter);

        return links;   
}

module.exports ={
    searchLinks
}