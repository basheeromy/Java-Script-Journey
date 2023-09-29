/*
    const [a = aDefault, b] = array;
    This is example of array destructuring with default values in
    JavaScript, here is an example:

*/
const arr = [undefined, "this works"]
const [a = "Yes", b] = arr;
console.log([a,b]); // [ 'Yes', 'this works' ]

// nested binding.

const array = [1,2,3,4,5,6];

const [c, d, ...[e, f, ...[g, h]]] = array;
console.log(c,d,e,f,g,h);

// use destructuring syntax for swapping without additional variables.

let one = 1;
let two = 2;

[one, two] = [two, one];
console.log("One is " + one+ " and Two is " + two + " after swapped.");
