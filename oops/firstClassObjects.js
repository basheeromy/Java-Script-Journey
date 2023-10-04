/*
    * In JavaScript, functions are considered "first-class objects" or
      "first-class citizens." This means they can be treated like any
      other data type (e.g., numbers, strings, or objects).

    * Functions can be assigned to variables, passed as arguments to
      other functions, returned from functions, and stored as
      properties in objects.

    * When you define a function, it's not just a block of code to
      execute; it's also an object with properties and methods.
*/

function Add(num1, num2){
    return  num1 + num2
};
console.log(Add(2,5));
console.log(Add.constructor); // [Funciton: Function]

/*
    As functions are objects created with the built in constructor
    function 'Function()', we can try to create it as originally
    happens at backend of javascript.

    The Function constructor in JavaScript allows you to create
    functions dynamically from strings of code.

    here we have to pass arguments and codes inside the function as
    arguments in string format to Function constructor.

    * if there is lots of codes in logic part, use back tick string
      like we used in the bellow given example.
*/

let Subtract = new Function(
    "num1",
    "num2",
    `result = num1 - num2;
    return result;`
);
console.log(Subtract(23,7));

// Now, let's see how we can create a cunstructor function this way.

let Person = new Function(
    'name',
    'age',
    'place',
    `this.name = name;
    this.age = age;
    this.place = place;
    this.greeting = function() {
        console.log(\`Hi I'm \${this.name}\`)
    }`
);

const person1 = new Person("Basheer",26,"omassery");
const person2 = new Person("Thasni",18,"omassery");
person1.greeting() // Hi I'm Basheer
person2.greeting() // Hi I'm Thasni

/*
    When you create a function using the Function constructor, the
    resulting function object does come with some built-in methods,
    but these methods are not specific to functions created using
    Function constructor; rather, they are methods inherited from the
    Function.prototype object, which is the prototype for all function
    objects in JavaScript.

    Here are some of the common methods available on functions created
    using the Function constructor:
*/

/* call(): The call() method allows you to invoke a function with a
   specified this value and arguments provided individually,
   pass {} to refer this value as first argument. */

let ans = Subtract.call({}, 15, 5);
console.log(ans); // 10

/* apply(): The apply() method is similar to call(), but it accepts
   arguments as an array. except {} argument which refers this context.*/

console.log(Subtract.apply({},[20,12]));

/*  bind(): The bind() method returns a new function with a fixed this
    value and, optionally, initial arguments */

// with one argument.
let boundSubtract = Subtract.bind({}, 13);
console.log(boundSubtract(2));

// bind without any arguments.
boundSubtract = Subtract.bind({});
console.log(boundSubtract(13,6));


// here is some other methods too
/*
    toString(): The toString() method returns a string representation
        of the function's source code.

    length: The length property indicates the number of named parameters
        expected by the function.

    name: The name property contains the name of the function (if it
        has one).
*/