/*
    Hoisting is a JavaScript mechanism where variable and function
    declarations are moved to the top of their containing scope
    during the compilation phase. This means that regardless of
    where variables and functions are declared in your code,
    they are processed before the code is executed. However, it's
    important to note that only the declarations are hoisted, not
    the initializations or assignments.
*/

// there are tow types of hoisting in javascript,
// # variable hoisting
// # function hoisting

/*
    Variable Hoisting:

        When you declare a variable using the var keyword,
        it is hoisted to the top of its containing function
        or global scope.
*/

console.log(x); // this line will print undefined
var x = 5;
console.log(x); // this line will print 5

/*
    It's important to understand that hoisting behavior is
    specific to variables declared with var and function
    declarations. Variables declared with let and const are
    also hoisted, but they are not initialized with undefined
    like var variables. Instead, they enter a "temporal dead zone"
    and cannot be accessed until they are declared in the code.

    console.log(y); // ReferenceError: Cannot access 'x' before initialization
    let y = 5;
*/

/*
    Function Hoisting:

    Function declarations are also hoisted to the top of their
    containing scope. This means you can call a function before
    it is declared in your code.
*/

sayHello(); // "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}

/*
    Hoisting behaves differently for arrow functions and functions
    assigned to variables compared to traditional function
    declarations. Let's explore these scenarios:
*/

// getName();  "getName is not a function."
console.log(getName) // undefined

var getName = () => {
    console.log('Hello world 1 !.')
}
getName() // this line will print Hello world 1 !.

console.log(myArrowFunc); // undefined

// myArrowFunc() # TypeError: myArrowFunc is not a function

var myArrowFunc = () => {
  console.log("Hello from myArrowFunc");
};
