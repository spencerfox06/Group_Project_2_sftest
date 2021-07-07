// 1. Use the filter method to create a custom filtering function

function filterPokemonGen(pokemon) {
  return pokemon.generation == 7;
}

// 2. Use filter() to pass the function as its argument
var filteredPokemon = PokemonCleanData.filter(filterPokemonGen);

//  Check to make sure your are filtering your pokemon.
console.log(filteredPokemon);

// 3. Use the map method with the arrow function to return all the filtered pokemon types.
var filteredPokemontype = filteredPokemon.map(pokemon => pokemon.type1);

//  Check your filtered pokemon types
console.log(filteredPokemontype);

var arr = filteredPokemontype
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

var PokemonTypeCounts = {
  "Bug": counts['bug'],
  "Dark": counts['dark'],
  "Dragon": counts['dragon'],
  "Electric": counts['electric'],
  "Fairy": counts['fairy'],
  "Fighting": counts['fighting'],
  "Fire": counts['fire'],
  "Flying": counts['flying'],
  "Ghost": counts['ghost'],
  "Grass": counts['grass'],
  "Ground": counts['ground'],
  "Ice": counts['ice'],
  "Normal": counts['normal'],
  "Poison": counts['poison'],
  "Psychic": counts['psychic'],
  "Rock": counts['rock'],
  "Steel": counts['steel'],
  "Water": counts['water']
};

var xvalues = []
var yvalues = []
Object.entries(PokemonTypeCounts).forEach(([key, value]) => {
  xvalues.push(key);
  yvalues.push(value)

})

console.log(PokemonTypeCounts)

// 5. Create your trace.
var trace = {
  x: xvalues,
  y: yvalues,
  marker:{
    color: ['#A6B91A', '#705746', '#6F35FC', '#F7D02C',
     '#D685AD', '#C22E28', '#EE8130', '#A98FF3', '#735797',
     '#7AC74C', '#E2BF65', '#96D9D6', '#A8A77A', '#A33EA1',
     '#F95587', '#B6A136', '#B7B7CE', '#6390F0']
  },
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

// 6. Create the data array for plot
var data = [trace];

// 7. Define plot layout
var layout = {
  barmode: 'stack',
  title: "Pokemon Types by Generation",
  xaxis: { title: "Type of Pokemon" },
  yaxis: { title: "Number of Pokemon" }

};

// 8. Plot the chart
Plotly.newPlot("barchart", data, layout);
