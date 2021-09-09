
class Person {
    private id: number;
    private name: string;
    constructor(code: number, name: string) {
        this.id = code;
        this.name = name;
    }
    protected displayDetails() {
        console.log(`Student Code : ${this.id}`);
        console.log(`Student Name : ${this.name}`);
    }
}

class Student extends Person {
    private course: string;
    private fees: number;
    constructor(id: number, name: string, course: string, fees: number) {
        super(id, name);
        this.course = course;
        this.fees = fees;
    }
    public displayDetails() {
        super.displayDetails();
        console.log(`Course Enrolled : ${this.course}`);
        console.log(`Course Fees : ${this.fees}`);
    }
}

var student1 = new Student(101, "King", "Java", 12000);
student1.displayDetails();