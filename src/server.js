const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/user-route');

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

//Rota inicial (feita para teste da API)
app.get('/', (req, res) => {
    res.send('Conectado na API nodejs');
});

//Rotas do users
app.use('/api/v1/users', userRouter);

//Método para iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});