const {Schema,model, default: mongoose} = require('mongoose')


const modelName = "UserNotification"
const collectionName = "UserNotifications"

const userNotiSchema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    list_notification:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Notification'
        }
    ],
}, {
    collection: collectionName,
    timestamps: true
});

module.exports = model(modelName,userNotiSchema)
