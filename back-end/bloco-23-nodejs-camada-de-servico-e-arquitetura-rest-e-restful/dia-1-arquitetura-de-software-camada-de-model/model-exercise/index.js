const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const User = require('./models/User');
app.use(bodyParser.json());

app.get('/user', async (req, res) => {
    const users = await User.getAll();

    res.status(200).json(users);
});

app.post('/user', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    await User.creatUser(firstName, lastName, email, password )

    return res.status(201).json({ message: 'autor criado com sucesso'} );
})

app.listen(PORT, () => console.log(`TAMO ON NA PORTA ${PORT}`));