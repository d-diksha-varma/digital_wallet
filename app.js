const express = require('express');
const app = express();
const hostname = 'localhost';

app.get('/', (req, res) => {
    res.status(200).send('hello diksha')
})

app.listen(4000,() =>{
    console.log("server is running");
})  