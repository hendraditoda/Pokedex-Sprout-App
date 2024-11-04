import React from "react";

const PokemonCard = ({ name, id }) => {
  return (
    <div className="pokemon-card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        className="pokemon-image"
      />
      <h3 className="pokemon-name">{name}</h3>
    </div>
  );
};

export default PokemonCard;
