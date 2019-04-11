const stats = (linksValidate,path) => {
    const objectLinks = Object.keys(linksValidate).length;
    const objectStats = {
        Fyle : path,
        total : objectLinks};
    return objectStats;
    
}
module.exports = {
    stats
}