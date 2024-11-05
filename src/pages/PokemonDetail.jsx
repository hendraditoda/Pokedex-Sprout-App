import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const species = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );

      setPokemon({
        name: res.data.name,
        image: res.data.sprites.other["official-artwork"].front_default,
        stats: res.data.stats,
        weight: res.data.weight,
        height: res.data.height,
        types: res.data.types,
        about: species.data.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        ).flavor_text,
        evolutions: [], // bisa ditambahkan evolusi
      });
    };
    fetchPokemonDetail();
  }, [id]);
  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="pokemon-detail-container">
      <h1 className="pokemon-title">{pokemon.name}</h1>
      <img
        className="pokemon-detail-image"
        src={pokemon.image}
        alt={pokemon.name}
      />
      <div className="pokemon-info">
        <h2>About</h2>
        <p>Height: {pokemon.height * 10} cm</p>
        <p>Weight: {pokemon.weight / 10} kg</p>
        {/* <p>{pokemon.about}</p> */}
        <h3>Stats</h3>
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetail;
