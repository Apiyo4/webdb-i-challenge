const express = require('express');
const AccountsRouter = require('./accounts/account-router');

const server = express();

server.use(express.json());
server.use('/api/accounts', AccountsRouter);

server.get('/', (req,res)=>{
    res.status(200).json(`Api's working`)
})

module.exports = server;