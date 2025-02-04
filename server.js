const express = require('express');
const connectDB = require('./config/db')

const app = express();

app.listen(3000, async (res,req) => {
    try{
        await connectDB();
        console.log('server is connected');
    }catch(err) {
        console.error(err);
    }
});

