const searchLinks = (data) => {
    const links = data.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi);
        return links;   
}

module.exports ={
    searchLinks
}

