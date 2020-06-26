// Goob Job!
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 
                'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan',
                 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

var goodjob = people.map(function(newString){
    return `Good job, ${newString}!`
})

console.log(goodjob);