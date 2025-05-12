import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/pokemon/type/:type', async (req, res) => {
    const type = req.params.type.toLowerCase();
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        if (!response.ok) {
            return res.status(response.status).send(`Erro: ${response.status}`);
        }
        const data = await response.json();
        const pokemons = data.pokemon.map(p => p.pokemon);
        res.json(pokemons);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/pokemon', (req, res) => {
    res.send('Este método ainda não está implementado');
});


app.put('/pokemon/:id', (req, res) => {
    res.send('Este método ainda não está implementado');
});

app.delete('/pokemon/:id', (req, res) => {
    res.send('Este método ainda não está implementado');
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});