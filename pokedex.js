const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  const pokedexName = document.getElementById("pokedexName");
  let pokeName = pokeNameInput.value;
  document.getElementById("pokedexName").innerHTML = pokeName;

  pokeName = pokeName.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  fetch(url).then((res) => {
      if (res.status != "200") {
          console.log(res);
          pokeImage("./pokemon-sad.png")
          document.getElementById("pokedexName").innerHTML = "No existe ese pokemon";
          document.getElementById("pokedexType").innerHTML = "----";
          document.getElementById("pokedexNumber").innerHTML = "000";
      }
      else {
          return res.json();
      }
  }).then((data) => {
      if (data) {
          console.log(data);
          let pokeImg = data.sprites.front_default;
          pokeImage(pokeImg);
          console.log(pokeImg);
          document.getElementById("pokedexType").innerHTML = data.types[0].type.name;
          document.getElementById("pokedexNumber").innerHTML = "#" + data.id;
      }
  });
}

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
}

 