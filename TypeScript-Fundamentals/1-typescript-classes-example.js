// class Student {
//     studentCode: number;
//     studentName: string;
//     constructor() {
//         this.studentCode = 1001;
//         this.studentName = "Kartik Sharma";
//     }
//     displayDetails() {
//         console.log(`Student Code : ${this.studentCode}`);
//         console.log(`Student Name : ${this.studentName}`);
//     }
// }
// var student1 = new Student();
// student1.displayDetails();
// var student2 = new Student();
// student2.displayDetails();
/* **************************************** */
var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studentCode = code;
        this.studentName = name;
    }
    Student.prototype.displayDetails = function () {
        console.log("Student Code : " + this.studentCode);
        console.log("Student Name : " + this.studentName);
    };
    return Student;
}());
var student1 = new Student(1001, "Kartik Sharma");
student1.displayDetails();
var student2 = new Student(1002, "Gautam Bhalla");
student2.displayDetails();
