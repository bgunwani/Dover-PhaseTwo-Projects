
// function Person() {
//     this.firstName = 'Kartik';
//     this.lastName = 'Sharma';
//     this.getFullName = function() {
//         return `Welcome ${this.firstName} ${this.lastName}!!`;
//     }
// }

// Person.prototype.age = 23;

// var person1 = new Person();
// console.log(person1.getFullName());
// console.log(person1.age);

// var person2 = new Person();
// console.log(person2.getFullName());
// console.log(person2.age);

/* **************************************************** */

function Person(firstName, lastName) {
    this.firstName = firstName || "Annonymous";
    this.lastName = lastName || "Annonymous";
    this.getFullName = function() {
        return `Welcome ${this.firstName} ${this.lastName}!!`;
    }
}

Person.prototype.age = 23;

var person1 = new Person("King", "Kochhar");
console.log(person1.getFullName());
console.log(person1.age);

var person2 = new Person("John", "Smith");
console.log(person2.getFullName());
console.log(person2.age);


var person3 = new Person();
console.log(person3.getFullName());
console.log(person3.age);


