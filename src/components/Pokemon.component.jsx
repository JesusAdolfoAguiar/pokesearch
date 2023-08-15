import React, {useState, useEffect} from 'react';
import './Pokemon.styles.css';
const Pokemon = () => {

    // For the input button
    const [updated, setUpdated] = useState('');
    const [currentPokemon, setCurrentPokemon] = useState('ditto');
    const [lastSearched, setLastSearched] = useState('ditto');

    //For fetching the Pokemon sprite
    const [sprite, setSprite] = useState(null);

    const fetchPokemons = async () => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`);
        let data = await response.json();
        let spriteUrl = data['sprites']['front_default'];
        setSprite(spriteUrl);
        setLastSearched(currentPokemon);
        console.log('Pokemon', spriteUrl);
    };

    useEffect(() => {
        fetchPokemons();
    }, [])

    return (
        <div>
            <input
                type="text"
                id="message"
                name="message"
                placeholder='Pokémon name'
                defaultValue={currentPokemon}
                onChange={(e) => setCurrentPokemon(e.currentTarget.value.toLocaleLowerCase()) }
                className="pa3 ba b--green bg-lightest-blue"
            />
            <br />
            <button className="pa3 ba b--green bg-lightest-blue" onClick={fetchPokemons}>Search Pokémon</button>
            <h2>Pokémon: {lastSearched}</h2>
            <img className='pokemon-sprite' src={sprite} alt="" />
        </div>
    );
}

export default Pokemon;