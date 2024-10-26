const messageCode = require('./message_core')
const statusCode = require("./status_core")
class SuccessResponse{
    constructor ({
        message, status, metaData
    }) {
        this.message = message,
        this.status = status,
        this.metaData = metaData
    }

    send = (res) =>{
        return  res.status(this.status).json(this)
    }
}

class OK extends SuccessResponse{
    constructor({
        message = messageCode.OK, status = statusCode.OK, metaData = {}
   }){
        super({message,status,metaData})
    }
}



module.exports = {OK}