import React from "react";

const FavoriteContext = React.createContext({
  FavoriteContext: [],
  updateFavoritePokemons: (id) => null,
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
