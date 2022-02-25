const express = require ("express")
const router = express.Router()
const Meta = require("../models/metasSchema");

router.post("/" , async (req,res) => {
    const {name,value,userMeta} = req.body
    const meta = new Meta({name:name,value:value,userMeta:userMeta})
    try {
        await meta.save()
        res.status(200).json(meta)
    }catch{
        res.status(500).json({error:"Nao foi possivel salvar"})
    }
})

router.get("/:id" , async (req,res) => {
    const id = req.params.id
    try{
        const metas = await Meta.find({userMeta: id})
        res.status(200).json(metas)
    }catch{
        res.status(500).json({"error" : "nao encontrado"})
    }
})

router.delete("/:id" , async(req,res)=>{
    const id = req.params.id
    try{
        let meta = await Meta.findById(id)
        await meta.delete()
        res.status(200).json(meta)
    }catch(error){
        res.status(500).json({error : "nao foi possivel deletar"})
    }
})
module.exports = router;