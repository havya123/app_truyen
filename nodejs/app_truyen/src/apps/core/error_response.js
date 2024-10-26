const messageCode = require('./message_core')
const statusCode = require("./status_core")
class ErrorConfig extends Error{
    constructor (
        message , status
    ) {
        super(message),
        this.status = status
    }

}

class PageNotFound extends ErrorConfig{
    constructor(
        message = messageCode.NOT_FOUND, status = statusCode.NOT_FOUND
    ) {
        super(message,status)
    }
}

class Conflict extends ErrorConfig{
    constructor(
        message = messageCode.CONFLICT, status = statusCode.CONFLICT
    ) {
        super(message,status)
    }
}

module.exports = {PageNotFound,Conflict}
