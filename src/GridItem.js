import React from "react";

export const GridItem = ( pokemon ) => {
  const {
    name = "",
    photo,
    ability1,
    ability2,
    height,
    power,
    number,
  } = pokemon;

  return (
    <div>
      <div className="pokemondata">
        <div className="d-flex flex-wrap">
          <h2>{name}</h2> <p className="number">#{number}</p>
        </div>
        <img src={photo} />
        <p>
          <a className="text-white">Height: </a>
          <a> {height}</a>
        </p>

        <p>
          <a className="text-white">Abilities:</a>
          <a>
            {ability1} / {ability2}
          </a>
        </p>

        <p>
          <a className="text-white"> Power: </a>
          <a> {power}</a>
        </p>
      </div>
    </div>
  );
};
