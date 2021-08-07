const express = require('express')
const app = express()
require('dotenv').config()
const fs = require('fs')

app.use(express.static('public'))

PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server running on ${PORT}`))

app.get('/yes', async (req, res)=>{
    const rand = Math.floor(Math.random() * 3)
    const data = fs.readFileSync(`./public/img${rand}.txt`, encoding="utf8")
    res.json(data)
});

