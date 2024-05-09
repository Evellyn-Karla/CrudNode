const express = require("express")
const routes = express.Router();
const mongoose = require('mongoose')
 
const Receita = mongoose.model('Receita', {
    nome: String,
    tempo: String,
    rendimento: String,
    ingredientes: String,
    preparo: String
})

routes.get('/', async (req, res) => {
    const receitas = await Receita.find()
    return res.send(receitas)
})

routes.delete("/:id", async (req, res) => {
    const receita = await Receita.findByIdAndDelete(req.params.id)
    return res.send(receita)
})

routes.put("/:id", async (req, res) => {
    const receita = await Receita.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        tempo: req.body.tempo,
        rendimento: req.body.rendimento,
        ingredientes: req.body.ingredientes,
        preparo: req.body.preparo
    })
    return res.send(receita)

})

routes.post("/", async (req, res) => {

    try {
        const receita = await Receita.create(req.body)
        return res.status(200).json(receita);


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message })
    }

})

module.exports = routes;