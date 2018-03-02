// Cities 1
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function getCitiesCoolerThan70Deg(arr) {
  let names = arr.filter(function(element) {
    return element.temperature < 70;
  }); // filters the cities but objects remain
  return names.map(function(element) {
    return element.name;
  }); // flattens out objects so array of city names remain
}

let coolCities = getCitiesCoolerThan70Deg(cities);
console.log(coolCities);

// Cities 2
function getCityNames(arr) {
  return arr.map(function(element) {
    return element.name;
  });
}
let cityNames = getCityNames(cities);
console.log(cityNames);