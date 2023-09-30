/*
    Template literals are literals delimited with backtick (`) characters,
    allowing for multi-line strings, string interpolation with embedded
    expressions, and special constructs called tagged templates.

    Template literals are sometimes informally called template strings,
    because they are used most commonly for string interpolation (to
    create strings by doing substitution of placeholders). However,
    a tagged template literal may not result in a string; it can be used
    with a custom tag function to perform whatever operations you want
    on the different parts of the template literal.
*/

// SYNTAX

/*
    `string text`

    `string text line 1
     string text line 2`

    `string text ${expression} string text`

    tagFunction`string text ${expression} string text`

*/

let string = `The string text that will become part of the template
literal. Almost all characters are allowed literally, including line
breaks and other whitespace characters. However, invalid escape
sequences will cause a syntax error, unless a tag function is used.`;

string = `string text from line one
sring text from line two.`;
console.log(string);

console.log('-----------------------------')

// use ${} to add variables to string.

const inject = "This line is injected.";
let newString = `${string}
${inject}`;

console.log(newString);

console.log('-----------------------------');

/*
    To escape a backtick in a template literal, put a backslash (\)
    before the backtick.
*/
console.log(`\`` === "`"); // true

console.log(`\${1}` === "${1}") // true


function tagFunc(strings, ...values) {
    console.log(strings);
    console.log(values);
    let result = ""
    for(i = 0; i < strings.length; i++ ) {
        result += strings[i];
        if (i < values.length) {
            result += values[i];
        }

    }
    return result;
}

const name1 = "Arun";
const age =  26;
const resultString = tagFunc`My name is ${name1} and I am ${age} years old.`;
console.log(resultString);