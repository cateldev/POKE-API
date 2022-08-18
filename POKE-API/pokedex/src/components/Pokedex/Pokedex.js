import React from "react";
import "./Pokedex.css";
import Pokemon from "../Pokemon/Pokemon.js";
import Pagination from "../Pagination/Pagination";

const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages } = props;
  
  const onLeftClickHandler = () => {

  }

  const onRightClickHandler = () => {
    
  }

  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div> Carregando, segura a fera...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
