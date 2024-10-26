const {Schema,model, default: mongoose} = require('mongoose')


const modelName = "Category"
const collectionName = "Categories"

const categoryScheme = new Schema({
    category_name: String,
    description:String,
    list_manga_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Manga'
        }
    ],
    ordering:Number,
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
},{
    collection: collectionName,
    timestamps: true
});

module.exports = model(modelName,categoryScheme)
