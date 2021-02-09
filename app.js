const express = require('express');
require('dotenv').config()
const app = express();

app.listen(process.env.PORT);

app.get('/', (req, res) =>{
    res.send('Hello Heroku')
})