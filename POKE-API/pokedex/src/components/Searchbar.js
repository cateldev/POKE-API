import React, { useState } from "react";
import { searchPokemon } from "../api";
import "./Searchbar.css";

const Searchbar = () => {
  const [search, setSearch] = useState("ditto");
  const [pokemon, setPokemon] = useState();
  const onChangeHandler = (e) => {
    console.log("pokemon: ", e.target.value);
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search pokemon" onChange={onChangeHandler} />
      </div>

      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>

      {pokemon ? (
        <div>
          <div> Name: {pokemon.name}</div>
          <div> Weight: {pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
