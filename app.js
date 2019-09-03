import getPokemons from "./pokemonAPI.js";
let next = null;

//Initial call;
getPokemons()
  .then(res => {
    next = res.data.next;
    displayPokemons(res.data.results);
  })
  .catch(err => console.log(err));

function displayPokemons(pokemons) {
  const pokemonShowcase = document.getElementById("pokemon-showcase");
  pokemons.forEach(p => createPokemonDiv(p, pokemonShowcase));
}

function createPokemonDiv(p, parent) {
  const pokemonDiv = document.createElement("div");
  pokemonDiv.className = "pokemon-card";
  pokemonDiv.innerHTML = `<p class="pokemon-name">${p.name}</p>`;
  parent.appendChild(pokemonDiv);
  pokemonDiv.onmouseenter = () => displayPokemonDetails(p, pokemonDiv);
  pokemonDiv.onmouseleave = () => (pokemonDiv.style.backgroundImage = "");
}

document.getElementById("pokemon-showcase").onscroll = async function(e) {
  if (this.scrollTop + this.offsetHeight === this.scrollHeight) {
    if (!next) return;
    const res = await axios.get(next);
    const pokemons = res.data.results;
    next = res.data.next;
    displayPokemons(pokemons);
  }
};

async function displayPokemonDetails(pokemon, pokemonDiv) {
  const res = await axios.get(pokemon.url);
  pokemonDiv.style.backgroundImage = `url(${res.data.sprites.front_default})`;
}
