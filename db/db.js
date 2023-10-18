import { mongoose } from 'mongoose'

const connectDb = async ()=> {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`mongodb connected: ${connect.connection.host}`.cyan.underline)
    } catch(error){
        console.log(`Error: ${error.message}`.underline.bold)
        process.exit(1)
    }
}