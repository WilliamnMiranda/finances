const express = require ("express")
const router = express.Router()
const Entrada = require("../models/entradasSchema");

router.post("/register" , async (req,res) => {
    const {name,value,userEntrada} = req.body
    const entradas = new Entrada({name:name,value:value,userEntrada:userEntrada})
    try {
        await entradas.save()
        res.status(200).json(entradas)
    }catch{
        res.status(500).json({error:"Nao foi possivel salvar"})
    }
})

router.get("/:id" , async (req,res) => {
    const id = req.params.id
    try{
        const entradas = await Entrada.find({userEntrada: id})
        res.status(200).json(entradas)
    }catch{
        res.status(500).json({"error" : "nao encontrado"})
    }
})

router.get("/:id/:limit" , async (req,res) => {
    const id = req.params.id
    const limit = req.params.limit
    try{
        const entradas = await Entrada.find({userEntrada : id}).limit(limit)
        res.status(200).json(entradas)
    }catch{
        res.status(500).json({"error" : "nao encontrado"})
    }
})

router.delete("/:id" , async(req,res)=>{
    const id = req.params.id
    try{
        let entrada = await Entrada.findById(id)
        await entrada.delete()
        res.status(200).json(entrada)
    }catch(error){
        res.status(500).json({error : "nao foi possivel deletar"})
    }
})
module.exports = router;