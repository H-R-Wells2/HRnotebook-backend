const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/hrnotebook";


const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports=connectToMongo;