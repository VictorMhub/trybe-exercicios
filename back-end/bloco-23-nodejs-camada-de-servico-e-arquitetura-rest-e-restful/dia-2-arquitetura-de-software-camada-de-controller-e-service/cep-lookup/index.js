const express = require('express')
const Cep = require('./controller/cepController');
const app = express()
const port = 3000

app.get('/ping', (req, res) => res.json({ message: "pong!" }))
app.get('/cep/:cep', Cep.getCepAdress);
app.post('/cep', Cep.creatCep);
app.listen(port, () => console.log(`TAMO ON NA PORTA ${port}!`));