/*
    In JavaScript, the ... (three dots) syntax is called the "spread/rest
    operator," and its behavior depends on where it's used:

    Spread Operator: When used in function calls or array/object literals,
    it spreads the values of an iterable (like an array or string) into
    individual elements. It essentially unpacks the values.
*/

// IN FUNCTION CALLS.

const numbers = [1,2,3,4,5];

console.log(numbers); // print the array

console.log(...numbers); // print as individual values or as unpacked.

const str = "Awesome javascript.";
console.log(str);
const stringArray = new Array(...str);
console.log(stringArray);

// IN ARRAY LITERALS.

const array1 = [1,2,3,4];
const array2 = [...array1, 5,6,"a"];
console.log(array2);

// IN OBJECT LITERALS.

const person = {name:'Basheer', age:30};
const updatedPerson = {...person, place:'Omassery'};
console.log(updatedPerson); // { name: 'Basheer', age: 30, place: 'Omassery' }

// REST PARAMETER.
/*
    When used as a function parameter, it collects multiple arguments
    into a single array. It's called the rest parameter because it
    collects the remaining parameters.
*/

function sum(...numbers) {
    return numbers.reduce(
        (total, num) => total + num, 0
    );
}

console.log(sum(1,2,3,4,5)); // 15
