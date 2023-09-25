/*
    A block statement is used to group zero or more statements.
    The block is delimited by a pair of braces ("curly brackets")
    and contains a list of zero or more statements and declarations.
*/
let c = 10;
//console.log(c);

{


    let c = 20;
    console.log(c);


}
//console.log(c);


function myNumber() {
    {
        var num1 = c * c
        c = num1


    }
    return function() {
        function a() {
            console.log(c);

            c = c * c;
        }
        a();
    }
}

val = myNumber();
val();
console.log(c);

console.log('-------------------------------')

/*
Shadowing with the let keyword in JavaScript is when a variable
declared with the let keyword in a certain scope has the same name
as a variable declared in an outer scope.

in the bellow given example, we declared a new variable inside a
block with same name we used to declare in it's outer scope. both's
value will remain seperate in each scopes.
*/

let num2 = 10;
{
    let num2 = 30;
    console.log(num2); // 30
}
console.log(num2); // 10

var num3 = 30;
{
    var num3 = 40;
    console.log(num3); // 40
}
console.log(num3); // 40

/*
    as both num3 sits in global scope, instead of shadowing, second
    declaration will lead to over ride the initial value.
*/

function check() {
    console.log(num3) // undefined
    var num3 = 45
    console.log(num3) // 45
}
check()
console.log(num3)

/*
    Shadowing with var keyword will work if we shadow the variable
    inside a function as the function has seperate memory context in
    call stack.
*/
