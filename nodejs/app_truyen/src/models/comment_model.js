const {Schema,model, default: mongoose} = require('mongoose')
let slugify = require('slugify')

const modelName = "Comment"
const collectionName = "Comments"

const commScheme = new Schema({
    manga_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Manga'
    },
    chapter_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Chapter'
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    content: String,
},{
    collection: collectionName,
    timestamps: true
});


module.exports = model(modelName,commScheme)
