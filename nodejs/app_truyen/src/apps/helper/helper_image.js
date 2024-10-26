var fs = require('node:fs');

let rootPath = "/dist/img/"
const deleteImage = (name,prefix) => {
  
    let filePath =__public + rootPath + prefix + name
    console.log(filePath)
    fs.unlinkSync(filePath);
}


module.exports = {deleteImage}