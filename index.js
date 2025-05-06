
import fetch from 'node-fetch';


async function getPokemon(pokemonName) {
    try { 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);     
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        const data = await response.json();

        console.log(`Nome: ${data.name}`);
        console.log(`Altura: ${data.height}`);
        console.log(`Peso: ${data.weight}`);
        console.log(`Tipos: ${data.types.map(type => type.type.name).join(', ')}`);
    } catch (error) {
        console.error(error.message);
    }
}
getPokemon('Charmeleon');

