/*
    The ternary operator, also known as the conditional operator, is a
    concise way to write conditional statements in JavaScript. It
    allows you to execute different code based on a condition in a
    single line of code. The syntax of the ternary operator is as
    follows
*/

const value = 23;
const result = value >= 20 ? 'Yes' : 'No';

console.log(result)

/*
    Handling null values
    One common usage is to handle a value that may be null:
*/

const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
};

console.log(greeting({name:"Arun"})); // "Howdy, Arun"

console.log(greeting(null)); // "Howdy, stranger"