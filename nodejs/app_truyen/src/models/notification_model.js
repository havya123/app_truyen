const {Schema,model, default: mongoose} = require('mongoose')


const modelName = "Notification"
const collectionName = "Notifications"

const notiScheme = new Schema({
   manga_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Manga'
   },
   chapter_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
   },
   noti_title:String,
   noti_content:String,

}, {
    collection: collectionName,
    timestamps: true
});

module.exports = model(modelName,notiScheme)
