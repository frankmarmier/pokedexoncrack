const getPokemons = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon"
});

export default getPokemons;
