// Funtion statement. or Function declaration.

/*
    In JavaScript, a "function statement" is a way to declare a
    function using the function keyword. It's also sometimes referred
    to as a "function declaration." Function statements are used to
    define named functions that can be called before they are defined
    in the code because they are hoisted to the top of their containing
    scope during the compilation phase
*/

function myFunction(name) {
    console.log(`Hello, ${name}!`);
}

// Call the function
myFunction("Bsheer");

/*
  In JavaScript, a function expression is a way to define a function
  as a value within an expression. Unlike function statements, which
  are hoisted to the top of their containing scope, function expressions
  are not hoisted, and they can be defined inline within other
  expressions or assigned to variables.

  Function expressions are commonly used for various purposes, including:

    Passing functions as arguments to other functions (e.g., in callbacks).

    Creating functions dynamically based on conditions.

    Implementing closures to capture and remember local variables.

    Encapsulating code within modules or closures for better code
    organization and data hiding.
*/

const func_name = function () {
    console.log('this function declared as an expression.')
}

/*
    An anonymous function in JavaScript is a function that does not
    have a name. Anonymous functions can be defined using the function
    keyword, but they do not have a function identifier after the
    keyword. Anonymous functions can be assigned to variables, passed
    as arguments to other functions, or returned from other functions.
*/

const myAnonymousFunction = function() {
    console.log("Hello from the anonymous function!");
};

// Call the anonymous function
myAnonymousFunction();

/*
    Anonymous functions can be useful in a variety of situations. For
    example, anonymous functions can be used to create callbacks, which
    are functions that are passed as arguments to other functions.
    Callbacks can be used to implement a variety of features, such as
    asynchronous programming and event handling.

    Another common use case for anonymous functions is to create one-off
    functions that are only needed once. For example, you might use an
    anonymous function to filter an array or to sort a list of items.

*/

//Here is an example of how to use an anonymous function to filter an array:

const numbers = [1, 2, 3, 4, 5];

// Filter the array to only include even numbers
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

// Print the even numbers
console.log(evenNumbers);

/*  A named function expression in JavaScript is a function expression
    that has a name. Named function expressions are similar to function
    statements, but they can be assigned to variables and passed as
    arguments to other functions.


    To define a named function expression in JavaScript, you use the
    function keyword followed by the name of the function and a list of
    parameters, if any. The body of the function is defined within a block
    of code.


    Here is an example of a named function expression in JavaScript:
*/

const myFunctionExpression = function greet(name) {
  console.log(`Hello, ${name}!`);
};

// Call the function expression
myFunctionExpression("Basheer.");

/*
    Key characteristics of named function expressions:

    Function Has a Name: In a named function expression, the function
    has a name assigned to it, which is used to reference the function
    from within itself and in the surrounding code.

    Still an Expression: Despite having a name, it's still a function
    expression and not a function declaration. This means it's not
    hoisted to the top of its containing scope and can't be called
    before it's defined in the code.

    Here's an example of a named function expression:
*/

const add = function sum(x, y) {
  // The function can refer to itself using the name "sum"
  console.log(sum);
  return x + y;
};

console.log(add(5, 7));


/*
    First-class functions in JavaScript are functions that can be
    treated as values. This means that functions can be assigned to
    variables, passed as arguments to other functions, and returned
    from other functions.

    because of the same reason, functions calls as first class citizens.
*/