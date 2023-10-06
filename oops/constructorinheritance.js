/*
    In JavaScript, you can establish inheritance between constructor
    functions using the prototype chain. This allows you to create a
    relationship where one constructor function inherits properties
    and methods from another constructor function. This concept is
    essential for achieving code reuse and structuring your code in
    an object-oriented manner.
*/

// create a constructor function to use as parent constructor

function Customer(fname,lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.greeting = function () {
        return `Hello, I'm ${this.firstName} ${this.lastName}`
    }
}

// prototype method attached to Customer

Customer.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Child constructor which inherits from Customer

function Employee(fname,lname, empId, salary) {

    // Inherit properties and methods from Customer constructor
    Customer.call(this,fname,lname);

    // define properties for Employee constructor.
    this.empId = empId;
    this.salary = salary;
}

// Establish prototype inheritance.
// Employee.prototype = Customer.prototype // xxxxx
Employee.prototype = Object.create(Customer.prototype);

/*
    If you set Employee.prototype = Customer.prototype, it will directly
    link the Employee prototype to the Customer prototype without
    creating an intermediary object via Object.create(). While this
    approach does establish a link between the two prototypes, it has
    some important consequences:

    Shared Prototype:

                    Both Employee.prototype and Customer.prototype will
    point to the same object in memory. Any changes made to one
    prototype will affect the other because they reference the same
    underlying object. This can lead to unintended side effects if you
    modify one prototype.

    Constructor Property:

                    The constructor property of the Employee.prototype
    object will now refer to the Customer constructor function, not the
    Dog constructor function. This can cause confusion because it
    doesn't correctly reflect the constructor of Dog instances.

    so, use Object.create to create a new prototype instance of parent
    constructor and  assign it to child's constructor's prototype.
*/


// create a function which helps to calculate total salay for given months.
Employee.prototype.calcSalary = function(month) {
    return month * this.salary ;
}

// test everything

// create a new customer object
let customer1 = new Customer("Muhammed", "Ashraf");

// test the prototype method fullName()
console.log(customer1.fullName());

// create a new Employee instance
let employee = new Employee("Athul","Rajan", 121, 52000);

// Access the fullName() method inherited from Customer's prototype.
console.log(employee.fullName());

// Access the calcSalary() method of Employee prototype.
console.log(employee.calcSalary(10)); // 10 * 52000 = 520000

// Change Prototype inheritance command at line 39

console.log(Employee.prototype); // Customer { calcSalary: [Function (anonymous)] }
/*
result when using settings or line 39
  {
    fullName: [Function (anonymous)],
    calcSalary: [Function (anonymous)]
  }
*/
console.log(Customer.prototype); // { fullName: [Function (anonymous)] }
/*
result when using settings or line 39
  {
    fullName: [Function (anonymous)],
    calcSalary: [Function (anonymous)]
  }
*/

// here we can see that both constructors have same prototype.

// change settings to from line 39 to 40 and see the result in line 93 and 100.
