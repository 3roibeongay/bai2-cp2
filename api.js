document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCase(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokeName").value;
  const pokeName = lowerCase(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokeBox").innerHTML = `
            <div>
            <img
               src="${data.sprites.front_default}"
               alt="${data.name}">
            </div>
            <div class="pokeInfo">
              <h1>Name: ${capitalizeLetter(data.name)}</h1>
              <p>Height: ${data.height}</p>
              <p>Weight: ${data.weight}</p>
              <p id="abilities"></p>
              <p id="bio"></p>
        `;
    })
    .catch((err) => {
      document.querySelector(".pokeBox").innerHTML = `
            <h4>Pokemon not found 😞</h4>
      `;
    });
}

getPokemon();
