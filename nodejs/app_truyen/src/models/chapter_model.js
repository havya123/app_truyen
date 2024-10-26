const {Schema,model, default: mongoose} = require('mongoose')
let slugify = require('slugify')

const modelName = "Chapter"
const collectionName = "Chapters"

const chapterScheme = new Schema({
    manga_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Manga'
    },
    chapter_count: double,
    chapter_title: String,
    list_image:[String],
    list_comments:[String],
    total_view: int,
},{
    collection: collectionName,
    timestamps: true
});


module.exports = model(modelName,chapterScheme)
