export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const reponse = await fetch(url);
    return await reponse.json();
  } catch (error) {
    console.log("error: ", error);
  }
};
