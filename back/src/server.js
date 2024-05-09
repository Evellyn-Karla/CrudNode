const express = require("express")
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express()

app.use(express.json())
app.use(routes)
const port = 3000



app.listen(port, () => {
    mongoose.connect('mongodb+srv://evellynkarla1418:N1KZSb11sPrdpiLF@livroreceitas-api.zqypydi.mongodb.net/?retryWrites=true&w=majority&appName=livroreceitas-api')
    console.log(`Rodando na porta ${port}`)
})