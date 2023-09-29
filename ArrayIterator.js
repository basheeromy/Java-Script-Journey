const number = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < number.length; i++ ) {
    console.log(number[i]);
};

console.log('----------------------');

// forEach() method.

number.forEach((j) => {
    console.log(j);
});

console.log('----------------------');

// map() function.

const square = number.map((i) => {
    return i * i;
});
console.log(square);

// filter() function

/*
    The filter method expects the callback function to return a
    boolean value (true or false).
*/

const evens = number.filter((i) => {
    return i % 2 === 0;
});

console.log(evens)