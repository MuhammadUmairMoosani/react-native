const express = require('express');
const app = express();
app.get('/',function (req,res) {
    res.send('Hello From express')
}).listen(1000)
