import { useEffect, useState } from 'react';
import { Species } from '../model/pokemon-model';
import { fetchAllPokemon } from '../service/PokemonApiService';


function PokemonList() {
    const [ pokemon, setPokemon ] = useState<Species[]>([]);

    useEffect(() => {
        fetchAllPokemon().then(data => {
            setPokemon(data);
        });
    }, []);

    return (
        <div className="PokemonList">
            <h2>Pokemon List</h2>
            { pokemon.length == 0 ?
            <p>Loading Data...</p> : 
            <ol>
                {pokemon.map(pokemon => 
                    <li key={pokemon.name}>{pokemon.name}</li>
                )}
                </ol>}
        </div>
    )
}

export default PokemonList;