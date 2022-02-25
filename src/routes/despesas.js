const express = require ("express")
const router = express.Router()
const Despesa = require("../models/despesasSchema");

router.post("/" , async (req,res) => {
    const {name,value,userDespesa} = req.body
    const despesa = new Despesa({name:name,value:value,userDespesa:userDespesa})
    try {
        await despesa.save()
        res.status(200).json(despesa)
    }catch{
        res.status(500).json({error:"Nao foi possivel salvar"})
    }
})

router.get("/:id" , async (req,res) => {
    const id = req.params.id
    try{
        const despesas = await Despesa.find({userDespesa : id})
        res.status(200).json(despesas)
    }catch{
        res.status(500).json({"error" : "nao encontrado"})
    }
})

router.get("/:id/:limit" , async (req,res) => {
    const id = req.params.id
    const limit = req.params.limit
    try{
        const despesas = await Despesa.find({userDespesa : id}).limit(limit)
        res.status(200).json(despesas)
    }catch{
        res.status(500).json({"error" : "nao encontrado"})
    }
})

router.delete("/:id" , async(req,res)=>{
    const id = req.params.id
    try{
        let despesa = await Despesa.findById(id)
        await despesa.delete()
        res.status(200).json(despesa)
    }catch(error){
        res.status(500).json({error : "nao foi possivel deletar"})
    }
})
module.exports = router;