// 1. Use the filter method to create a custom filtering function

function filterPokemonGen(pokemon) {
  return pokemon.generation == 1;
}

// 2. Use filter() to pass the function as its argument
var filteredPokemon = PokemonCleanData.filter(filterPokemonGen);

//  Check to make sure your are filtering your pokemon.
console.log(filteredPokemon);

// 3. Use the map method with the arrow function to return all the filtered pokemon types.
var filteredPokemontype = filteredPokemon.map(pokemon => pokemon.type1);

//  Check your filtered pokemon types
console.log(filteredPokemontype);

// 4. Use the map method with the arrow function to return count of the filtered pokemon types.
// var PokemonTypeCounts = filteredPokemontype.count(pokemon => pokemon.type1);
var PokemonTypeCounts = filteredPokemontype.values()

//  Check your filtered counts.
console.log(PokemonTypeCounts);

// 5. Create your trace.
var trace = {
  x: filteredPokemontype,
  y: PokemonTypeCounts,
  type: "bar"
};

// # Defining colors for graphs 
colors = {
    "Bug": "#A6B91A",
    "Dark": "#705746",
    "Dragon": "#6F35FC",
    "Electric": "#F7D02C",
    "Fairy": "#D685AD",
    "Fighting": "#C22E28",
    "Fire": "#EE8130",
    "Flying": "#A98FF3",
    "Ghost": "#735797",
    "Grass": "#7AC74C",
    "Ground": "#E2BF65",
    "Ice": "#96D9D6",
    "Normal": "#A8A77A",
    "Poison": "#A33EA1",
    "Psychic": "#F95587",
    "Rock": "#B6A136",
    "Steel": "#B7B7CE",
    "Water": "#6390F0",
}

// 6. Create the data array for our plot
var data = [trace];

// 7. Define our plot layout
var layout = {barmode: 'stack',
  title: "Pokemon Types by Generation",
  xaxis: { title: "Type"},
  yaxis: { title: "Number of Pokemon" }

};

// 8. Plot the chart
Plotly.newPlot("barchart", data, layout, color=colors);
