/*
    An arrow function expression (also called a fat arrow to distinguish
    from a hypothetical -> syntax in future JavaScript) has a shorter
    syntax compared to function expressions and does not have its own
    this, arguments, super, or new.target. Arrow functions are always
    anonymous.

    Arrow functions cannot be used as constructors. Calling them with
    new throws a TypeError. They also don't have access to the
    new.target keyword.

    Arrow functions cannot use yield within their body and cannot be
    created as generator functions.

    Two factors influenced the introduction of arrow functions:
    * shorter functions
    * non-binding of this.
*/

// Try it out.

const a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
];

// Normal Function.
const b = a.map(function(s) {
    return s.length;
});

console.log(b); // [ 8, 6, 7, 9 ]

// Arrow function

const c = a.map((s) => s.length);

console.log(c); // [ 8, 6, 7, 9 ]

/*
    Here in the above given example, we are using arrow function
    without curly braces. this syntax can be used if there is only
    single statement inside the function and return the value. we
    can use curly braced syntax to use multiple lines of codes.
*/

const d = a.map((s) => {
    console.log(s);
    return s.length;
});

console.log(d);


