const searchLinks = (data) => {
    const links = data.match(/(((https?:\/\/)|(www\.))[^\s]+)/g);
        return links;   
}

module.exports ={
    searchLinks
}

///(https?:\/\/[^\s]+)/g