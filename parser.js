
const searchMd = (list) => {
  const linksMd = list.filter(files => files.includes('.md'));
  return linksMd
}

module.exports = {
  searchMd
}






