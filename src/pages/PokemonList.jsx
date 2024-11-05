import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard.jsx";
import "../styles/PokemonList.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await Promise.all(
        res.data.results.map(async (pokemon) => {
          const details = await axios.get(pokemon.url);
          return {
            id: details.data.id,
            name: details.data.name,
            image: details.data.sprites.front_default,
            color: getPokemonColor(details.data.types[0].type.name),
            types: details.data.types[0].type.name,
          };
        })
      );
      setPokemons(data);
    };
    fetchPokemons();
  }, []);

  const getPokemonColor = (type) => {
    const colors = {
      fire: "#F08030",
      water: "#6890F0",
      grass: "#78C850",
      electric: "#F8D030",
      // tambah tipe lainnya
    };
    return colors[type] || "#A8A878";
  };

  return (
    <div className="pokemon-list-container">
      <h1 className="title">Pokédex</h1>
      <div className="pokemon-grid">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
