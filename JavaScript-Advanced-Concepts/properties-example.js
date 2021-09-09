
// ECMAScript 5, this Student considered as class:
/*
function Student() {
    this.name = 'Kartik';
    this.age = 23;
    this.display = function() {
        console.log(`Student Name : ${this.name}`);
        console.log(`Student Age : ${this.age}`);
    }
}

var student1 = new Student();
console.log(`${student1.name} ${student1.age}`);
student1.display();
*/

/* ********************************************* */

// Working with Properties in JavaScript:

function Student() {
    var _name = 'Kartik';
    var _age = 23;
    Object.defineProperties(this, {
        "Name": {
            get: function() {
                return _name;
            },
            set: function(value) {
                _name = value;
            }
        },
        "Age": {
            get: function() {
                return _age;
            },
            set: function(value) {
                if(value < 18) {
                    console.log('Age is invalid.');
                    return;
                }
                _age = value;
            }
        } 
    })
    this.display = function() {
        console.log(`Student Name : ${_name}`);
        console.log(`Student Age : ${_age}`);
    }
}

var student1 = new Student();
student1.Name = "Bhawna";                           // Set the Properties
student1.Age = 12;                                  // Set the Properties
console.log(`${student1.Name} ${student1.Age}`);    // Read the Properties
student1.display();