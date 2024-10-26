const {Schema,model, default: mongoose} = require('mongoose')


const modelName = "Slider"
const collectionName = "Sliders"

const sliderScheme = new Schema({
    slider_image: String,
    slider_title: String,
    slider_description, String,
    ordering: Number,
    link: String,
    status: {
        enum:['active','inactive'],
        default: 'inactive'
    },
}, {
    collection: collectionName,
    timestamps: true
});

module.exports = model(modelName,sliderScheme)
