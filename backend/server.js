const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.Port;

app.use('/api',require('./routers/PinRoutes'))

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})    