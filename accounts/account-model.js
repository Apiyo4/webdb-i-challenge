const db = require('../data/dbConfig');

function getAllAccounts(){
    return db('accounts');
}
function getAccountById(id){
    return db('accounts').where({id}).first();
}

module.exports={
    getAllAccounts,
    getAccountById,
}