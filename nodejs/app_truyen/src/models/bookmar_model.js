const {Schema,model, default: mongoose} = require('mongoose')

const modelName = "Bookmark"
const collectionName = "Bookmarks"

const bookmarkScheme = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    list_manga:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Manga'
        }
    ],
},{
    collection: collectionName,
    timestamps: true
});


module.exports = model(modelName,bookmarkScheme)
