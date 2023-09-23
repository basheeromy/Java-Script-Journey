// SCOPE OF VAR.

/*
    In JavaScript, users can declare a variable using 3 keywords
    that are var, let, and const.
    The scope of the var keyword is the global or function scope.
    It means variables defined outside the function can be accessed
    globally, and variables defined inside a particular function can
    be accessed within the function.
*/

var a ;
console.log(a); // undefined.
function myNum() {
    var b = 100;
    a = 12; // assign value to a from this func scope.
    console.log(b);

};
// console.log(b) // ReferenceError: b is not defined
myNum();
console.log(a); // 12
a = 10;
console.log(a); // 10

// var can redeclare

var a = "this works"

console.log(a)

/*
    javascript is weakly typed language. so, we can assing any type
    of value to a variable. string or integer or anything.
    strong typed languages like C has to specify a data type and
    strictly follow the rule.
*/

console.log("---------------------------")

// SCOPE OF LET AND CONST

/*
    Scope: block scoped: The scope of a let variable is only block
    scoped. It can’t be accessible outside the particular block
    ({block}). Let’s see the below example.

    Users cannot re-declare the variable defined with the let
    keyword but can update it.

    variable with let can be declared without initialization,
    but, can't access before initialization,
    initialization also must be after declaration.

*/

// console.log(c) // ReferenceError: Cannot access 'c' before initialization

let c;
c = "declared with let key word."

// let c = 20; this will through syntax error

// console.log(c) // ReferenceError: Cannot access 'c' before initialization

d = 19
console.log(d)
var d;

// her we initialized d before declaring it. this will not work with let.

/* var is attached to window object wich stores global variables.
   let and const will be stored inside another script object as seperate
   storage (reserve space for let and const).

   A temporal dead zone (TDZ) is the area of a block where a variable
   is inaccessible until the moment the computer completely initializes
   it with a value.

    A block is a pair of braces ({...}) used to group multiple statements.
    Initialization occurs when you assign an initial value to a variable.

    A block’s temporal dead zone starts at the beginning of the block’s
    local scope. It ends when the computer fully initializes your
    variable with a value.

*/
console.log("---------------------------")

/*
    Variable declared with const must initialize with declaration,
    otherwise, it will through a syntax error.

    const also behave like let, it stores in special memory object.

    const can't access before declaring and initializing.

    const can't redeclare and reinitialize. or can't change it's
    value.

*/

// console.log(number) // ReferenceError: Cannot access 'number' before initialization
const number = 100;
//const number1; // SyntaxError: Missing initializer in const declaration
// number = 200; // TypeError: Assignment to constant variable.