import React, {useState, useEffect} from "react";
import axios from "axios";

const Pokemon = (props) => {

    const [pokemonList, setPokemonList] = useState([]);
    const [sprite, setSprite] = useState("");
    const [URL, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=807")
    
    const getPokemon = () => {
        axios.get(URL).then((response)=> {
            setPokemonList(response.data.results);
        })
        .catch(error => console.log(error))
    };

    return (
    <div>
        <button onClick={getPokemon}>
        Fetch Pokemon
        </button>
        <ol>
        {pokemonList.length > 0 &&
            pokemonList.map((pokemon, index) => {
            return (
                <>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt={index}/>
                    <li key={index}>{pokemon.name}</li>
                </>
            );
            })}
        </ol>
    </div>
    );
}

export default Pokemon;