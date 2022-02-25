const express = require ("express")
const router = express.Router()
const User = require ("../models/usuarioSchema");

router.post('/register' , async (req,res) => {
    const {name , email , password , id} = req.body
    const user = new User ({name,email,password,id})
    try{
        await user.save()
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({error:"Nao foi possivel criar a conta"})
    }

})

router.get('/login' , async (req,res) => {
    const user = await User.find()
    res.status(200).json(user)

})

module.exports = router;