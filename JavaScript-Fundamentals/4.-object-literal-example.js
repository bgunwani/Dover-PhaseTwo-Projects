
/*  Object Literal */

/* ************************************ */

// Empty Object Literal
// var person = {};
// Attach Properties and Methods to it.
// person.firstName = "King";
// person.lastName = "Kochhar";
// person.getFullName = function() {
//     console.log(`${this.firstName} ${this.lastName}`);
// }
// Accessing members of Object Literal:
// console.log(person.firstName);
// console.log(person["lastName"]);
// person.getFullName();

/* ************************************ */

// Object Literal with Properties and Methods
var person = {
    firstName: "John",
    lastName: "Smith",
    address: {
        street: "Civil Lines",
        city: "New Delhi",
        country: "India"
    },
    displayDetails: function() {
        console.log(`${this.firstName} ${this.lastName}`);
        console.log("Address: ");
        console.log(`${this.address.street}, ${this.address.city}, ${this.address.country}`);
    }
}
console.log(person.firstName);
console.log(person["lastName"]);
person.displayDetails();

