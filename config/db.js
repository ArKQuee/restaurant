const mongoose = require('mongoose');

const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://sajinsajigeorge:sajinsaji2005@cluster0.nnwqb.mongodb.net/");
       console.log('MongoDB connected')
    } catch(err) {
        console.error(err)
    }
}

module.exports = connectDB;