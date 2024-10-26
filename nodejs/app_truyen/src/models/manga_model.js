const {Schema,model, default: mongoose, Mongoose} = require('mongoose')
let slugify = require('slugify')


const modelName = "Manga"
const collectionName = "Mangas"

const mangaScheme = new Schema({
    manga_title: String,
    manga_author: String,
    manga_description:String,
    manga_category: [String],
    manga_avatar:String,
    manga_cover:String,
    list_chapter: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Chapter"
        }
    ],
    total_views:int,
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    release_at: {
        type: Date,
    },
    slug: String,
},{
    collection: collectionName,
    timestamps: true
});

itemScheme.pre('save', function(next){
    this.slug = slugify(this.name, {
        lower: true,
    })
    next();
})

module.exports = model(modelName, mangaScheme)