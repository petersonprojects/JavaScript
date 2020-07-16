
// var greeting = [1,4,6,8,9];

// module.exports.greeting = greeting;

// makes this available to all parts of application

var myObj = {
    firstName: 'Micah',
    lastName: 'Peterson'
}

module.exports.anObject = myObj;

class Person
{
    constructor(firstName, lastName) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting = () => {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

module.exports.person = Person;