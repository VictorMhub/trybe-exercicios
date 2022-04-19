const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT = 3333

//EXERCICIO 1
app.get('/ping', (req,res) => {
   return res.status(200).json({message: 'pong'})
});

//EXERCICIO 2
app.post('/hello', (req, res) => {
    const { name } = req.body;
   return res.status(201).json({message: `Hello, ${name}!`});
});


//EXERCICIO 3
app.post('/greetings', (req, res) => {
    const { name, age } = req.body;

  if (parseInt(age, 10) <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }

  return res.status(200).json({ message: `Hello, ${name}!` });
});


//EXERCICIO 4
app.put('/users/:name/:age', (req,res) => {
    const { name, age } = req.params
    return res.json({message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});


//EXERCICIO 5


app.listen(3333, () => {
    console.log(`O PAI TA ON NA PORTA ${PORT} `);
})