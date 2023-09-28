// The arguments of a function are maintained in an dictionary object.

const a = 10;
const b = 20;
const c = 30;

function x(d,e,f) {
    // print the number of arguments.

    console.log(arguments.length)
    console.log(arguments)

    for (i=0; i < 3; i++) {
        // we can access arguments as follows like from a dictionary with indexing.
        console.log(arguments[i])
    }
}

// here, as we not passed any arguments. we can get an empty arguments dictionary.
x()

// let's see what happens when we pass values.
x(a,b,c)

// DEFAULT PARAMETERS.

/*
    In JavaScript, parameters of functions default to undefined.
    However, in some situations it might be useful to set a different
    default value. This is exactly what default parameters do.
*/
console.log('------------------')

function myfunction(a, b=10) {
    console.log(a);
    console.log(b);
}

myfunction()

// REST PARAMETERS

/*
    The rest parameter syntax allows us to represent an indefinite
    number of arguments as an array.
*/

function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

