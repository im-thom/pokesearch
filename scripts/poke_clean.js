const fs = require("fs");
const pokemon = require("../data/pokedex_original.json");

for (var i = 0; i < pokemon.length; i++) {
  delete pokemon[i].candy;
  delete pokemon[i].candy_count;
  delete pokemon[i].egg;
  delete pokemon[i].spawn_chance;
  delete pokemon[i].avg_spawns;
  delete pokemon[i].spawn_time;
  delete pokemon[i].multipliers;
  // These next two lines converts the original string value of the height to a float value
  let new_height = pokemon[i].height.split(" ");
  pokemon[i].height = parseFloat(new_height[0]);
  // These next two lines converts the original string value of the weight to a float value
  let new_weight = pokemon[i].weight.split(" ");
  pokemon[i].weight = parseFloat(new_weight[0]);
}

let data = JSON.stringify(pokemon);
fs.writeFileSync("data/pokedex_clean.json", data);
