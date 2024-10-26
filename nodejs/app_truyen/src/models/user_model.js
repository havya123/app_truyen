const {Schema,model, default: mongoose} = require('mongoose')


const modelName = "User"
const collectionName = "Users"

const userScheme = new Schema({
    user_account: String,
    user_email: {
        type: String,
        unique: true
    },
    user_name: String,
    user_role: {
        enum: ['user','admin'],
        default: 'user'
    },
    user_token: String,
    updated_at: {
        type: Date,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    }
},{
    collection: collectionName,
    timestamps: true
});

module.exports = model(modelName,userScheme)
