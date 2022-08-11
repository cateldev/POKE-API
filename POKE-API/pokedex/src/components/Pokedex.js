import React from "react";
import "./Pokedex.css";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Paginação:</div>
      </div>
      {loading ? (
        <div> Carregando, segura a fera...</div>
      ) : (
        <div className="pokedex-grid"> </div>
      )}
    </div>
  );
};

export default Pokedex;
