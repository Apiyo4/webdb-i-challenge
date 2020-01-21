const express = require('express');
const {getAllAccounts, getAccountById, addNewAccount, changeAccountById, removeAccount} = require('./account-model');
const router = express.Router();

router.get('/', async(req,res)=>{
    try{
        const allAccounts = await getAllAccounts();
        res.status(200).json(`${allAccounts} account was deleted` );
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
router.post('/', async(req, res)=>{
    try{
        const {name, budget} = req.body;
        const id = await addNewAccount({name, budget});
        res.status(200).json(` New account with id ${id} was created`);
    }catch(e){
        console.log(e);
    }
})
router.put('/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const { name, budget} = req.body;
        const updatedAccount = await changeAccountById({id, name, budget});
        res.status(200).json(updatedAccount);
    }
    catch(e){
        console.log(e);
    }
})
router.delete('/:id', async(req,res)=>{
    try{
        const {id} = req.params;
    const stuff = await removeAccount({id});
    res.status(200).json(stuff);
    }
    catch(e){
        console.log(e);
    }
})
module.exports= router;