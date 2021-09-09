var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(code, name) {
        this.id = code;
        this.name = name;
    }
    Person.prototype.displayDetails = function () {
        console.log("Student Code : " + this.id);
        console.log("Student Name : " + this.name);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, course, fees) {
        var _this = _super.call(this, id, name) || this;
        _this.course = course;
        _this.fees = fees;
        return _this;
    }
    Student.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Course Enrolled : " + this.course);
        console.log("Course Fees : " + this.fees);
    };
    return Student;
}(Person));
var student1 = new Student(101, "King", "Java", 12000);
student1.displayDetails();
