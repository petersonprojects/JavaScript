
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 
'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan',
 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

 people.sort(function(a,b){
     //returns negative, zero or positive
     return a.length - b.length
 })
 console.log(people);
