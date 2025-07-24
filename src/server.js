const express = require('express');
const dotenv = require('dotenv');
const User = require('./models/main-model');

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Conectado na API nodejs');
});

app.post('/users', async (req, res) => {
    console.log('req.body:', req.body);
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});