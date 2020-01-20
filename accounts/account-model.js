const db = require('../data/dbConfig');

function getAllAccounts(){
    return db('accounts');
}

module.exports={
    getAllAccounts,
}