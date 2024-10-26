const {Schema,model, default: mongoose} = require('mongoose')


const modelName = "AppSetting"
const collectionName = "AppSettings"

const appsettingsScheme = new Schema({
    appInfo: String,
   
},{
    collection: collectionName,
    timestamps: true
});

module.exports = model(modelName,itemScheme)
