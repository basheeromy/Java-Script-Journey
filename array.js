/*
    Arrays in JavaScript are a fundamental data structure used to store
    and manipulate collections of values. They can hold a mix of data
    types, including numbers, strings, objects, and even other arrays.
    JavaScript arrays are zero-indexed, which means the first element
    has an index of 0, the second element has an index of 1, and so on.
*/

// CREATING AN ARRAY

const fruits = ['apple', 'banana', 'cherry'];

// Creating an array with Array constructor:

const numbers = new Array(1,2,3,4,5);

// Accessing Array Elements with indexing.

console.log(fruits[0]);
console.log(numbers[3]);

// Modifying Array Elements

fruits[2] = 'jackfruit';
console.log(fruits);

/* Arry methods.
    * push() -Adds one or more elements to the end of an array.
    * pop() -Removes the last element from an array and returns it.
    * shift() -Removes the first element from an array and returns it.
    * unshift() - Adds one or more elements to the beginning of an array.
    * slice() -Returns a shallow copy of a portion of an array into a new array.
    * splice() -Changes the contents of an array by removing, replacing,
                or adding elements.

*/

fruits.push('orange'); // Adds orange to the end of fruits array.
console.log(fruits);

fruits.pop();
console.log(fruits); // removes orange from the end of fruits array.

const first = numbers.shift(); // removes first element.
console.log(first);
console.log(numbers);

numbers.unshift(9); // Add 9 to the beginning.

console.log(numbers);

const sliced = numbers.slice(1,4); // return values from first index to
// second index, but, exculding second index. here, from index 1,2,3
console.log(sliced)
console.log(numbers)

numbers.splice(1, 2)
console.log(numbers)


console.log('-------------------')

// ARRAY Length

console.log(fruits.length)



