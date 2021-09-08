
/* Object Constructor */
var person = new Object();
// Attach Properties and Methods:
person.firstName = "King";
person.lastName = "Kochhar";
person.getFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
}
// Access Members of Object Constructor:
console.log(person.firstName);
console.log(person["lastName"]);
if(person.hasOwnProperty('age')){
    console.log(person.age);
}
person.getFullName();

// Access Properties List and their values
for (const p in person) {
    console.log(p + ' : ' + person[p]);
}