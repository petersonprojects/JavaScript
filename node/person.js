
// mde shortcut for writing this
// no variable
module.exports = function(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
