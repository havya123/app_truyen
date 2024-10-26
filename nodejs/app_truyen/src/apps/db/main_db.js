var mongoose = require('mongoose')

class MainDB{
    async connection (){
        try {
            const uri = "mongodb+srv://haivo006:havya123@cluster0.g1rysb8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/news";
            await mongoose.connect(uri)
            console.log('connected')
        } catch (error) {
            console.log("connection failed")
        }
    }
}

module.exports = new MainDB();