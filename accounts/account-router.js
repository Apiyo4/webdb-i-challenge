const express = require('express');
const {getAllAccounts, getAccountById} = require('./account-model');
const router = express.Router();

router.get('/', async(req,res)=>{
    try{
        const allAccounts = await getAllAccounts();
        res.status(200).json(allAccounts);
    }
    catch(e){
        console.log(e);
    }

})
router.get('/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const account = await getAccountById(id);
        res.status(200).json(account);
    }
    catch(e){
        console.log(e);
    }
})
module.exports= router;