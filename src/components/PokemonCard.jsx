import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  // console.log(pokemon);
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="pokemon-card"
      style={{ backgroundColor: pokemon.color }}
    >
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <h3>{pokemon.types}</h3>
    </Link>
  );
};

export default PokemonCard;
