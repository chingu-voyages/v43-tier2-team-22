const express = require('express')

const app = express();

app.listen(3000, ()=>{
    console.log('Server started at port 3000')
})

app.get('/', (req, res)=>{
    res.send('This is a test')
})