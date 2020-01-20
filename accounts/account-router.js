const express = require('express');
const {getAllAccounts} = require('./account-model');
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
module.exports= router;