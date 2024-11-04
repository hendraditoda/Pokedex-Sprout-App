import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokemons(response.data.results);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokemon-list-container">
      <h1 className="title">Pokédex</h1>
      <div className="pokemon-grid">
        {pokemons.map((pokemon, index) => (
          <Link to={`/pokemon/${index + 1}`} key={index}>
            <PokemonCard name={pokemon.name} id={index + 1} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
