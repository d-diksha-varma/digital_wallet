const express = require('express');
const app = express();
const hostname = 'localhost';
const router = express.Router()
const morgan = require('morgan');

app.use(morgan('tiny'))
//app.use(morgan(':method :url :status'))


//:method :url :status :response-time ms - :res[content-length]

app.get('/', (req, res) => {
    res.status(200).send('hello diksha')
})

//morgan for particular app.get 
// app.get('/about',morgan('tiny'), (req, res) => {
//     res.status(200).send('Morgan for particular request')
// })

// app.get('/', (req, res, next) => {
//         res.status(200).send('hello diksha')
//         next()
// },(res, req, next) =>{
//     res.status(404).send('404 Not Found')
// })

app.listen(4000,() =>{
    console.log("server is running");
})  

const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://diksha:ytEG5XJyri6mEC6a@walletcluster.7amd7fb.mongodb.net/test');
    console.log("diksha===");
}