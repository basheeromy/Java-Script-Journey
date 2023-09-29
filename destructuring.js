/*
    The destructuring assignment syntax is a JavaScript expression that
    makes it possible to unpack values from arrays, or properties from
    objects, into distinct variables.

    Destructuring is a powerful feature in JavaScript that allows you
    to extract values from objects or arrays and assign them to variables
    in a more concise and readable way. It simplifies working with complex
    data structures.

    There are two primary forms of destructuring: object destructuring
    and array destructuring
*/

// Array Destructuring:

let a, b, rest;
[a, b, rest] = [10, 20, 30];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // 30


// here we assigned into multiple variables at a time.
console.log('-------------');
// now, we can try something else same way.

numset = [1,2,3,4,5,6,7,8,9,0];
[a, b, ...rest] = numset;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3,4,5,6,7,8,9,0]
/*
   It's also possible to skip values by omitting them in the
   destructuring pattern, also use the rest operator (...) to
   capture remaining elements into an array::
*/
console.log('------------- wert');
const [w,,e,r,...t] = numset; // skip 2

console.log(w);
console.log(e);
console.log(r);
console.log(t);

console.log("-----------------------")



// Object Destructuring:

/*
    Object destructuring lets extract values from objects by
    matching the property names. Here's a basic example:
*/

const person = {
    firstName: 'Muhammed',
    lastName: 'Basheer',
    age: 26,
    place: 'Omassery'
};
const {firstName, lastName, age, place} = person;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(place);

console.log("-----------------------")
// Also it's possible to assign new variable name during destructuring.

const {firstName:first, lastName:last, address} = person;
console.log(first);
console.log(last);
console.log(address); // undefined - as it's not present in the object.


/*
    Destructuring Function Parameters:

    Destructuring can also be used with function parameters to extract
    values from objects or arrays passed as arguments to functions.
    This can make function signatures more expressive and self-documenting:
*/

function greet({ firstName, lastName }) {
  console.log(`Hello, ${firstName} ${lastName}`);
  console.log('Hello '+ firstName +' '+ lastName );
}

const candidate = {
  firstName: 'Fathima',
  lastName: 'thasneem',
};

greet(candidate); // 'Hello, Fathima thasneem'
