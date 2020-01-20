const db = require('../data/dbConfig');

function getAllAccounts(){
    return db('accounts');
}
function getAccountById(id){
    return db('accounts').where({id}).first();
}
function addNewAccount({name, budget}){
    return db('accounts').insert({name, budget});
}
function changeAccountById({id, name, budget}){
    return db('accounts').where({id}).update({name, budget})

}
module.exports={
    getAllAccounts,
    getAccountById,
    addNewAccount,
    changeAccountById,
}