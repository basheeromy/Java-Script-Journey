/*
    In JavaScript, you can establish inheritance between two classes
    using the extends keyword in ES6 classes. The extends keyword
    allows you to create a subclass (child class) that inherits
    properties and methods from a superclass (parent class). Here's
    how you can implement inheritance between two classes:
*/

// define the parent class

class Customer {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;

        this.greeting = function () {
            return `Hello, this is ${this.firstName} ${this.lastName}`;
        }
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// define the child class
// use extends key word to establish inheritance.

class Employee extends Customer {
    constructor(fname, lname, empId, salary) {
        // super refers to parent class's constructor
        super(fname, lname);
        
        this.empId = empId;
        this.salary = salary;

        this.assignRole = function (role) {
            console.log(`New role assigned: ${role}`)
        }
    }
    getSalary(month) {
        return this.salary * month;
    }

}

// test
// create an employee instance

worker = new Employee("Suresh", "Kumar", 21, 45000);
console.log(worker.getSalary(10)); // 450,000
console.log(worker.fullName()); // Suresh Kumar
