import React, { useState } from "react";
import "./Searchbar.css";

const Searchbar = () => {
  const [search, setSearch] = useState("ditto");
  const onChangeHandler = (e) => {
    console.log("pokemon: ", e.target.value);
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {};
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
