var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

var cold_city = cities.filter(function(cityObj){
        return cityObj.temperature < 70;
    });

console.log(cold_city);