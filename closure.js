/*
    Function along with it's lexical scope or environment is called
    closure.
*/

function printer() {
    var num = "this works"
    return function insider() {
        console.log(num)
    }

}

var a = printer()
console.log(a)
a()

console.log("---------------------------")
function g() {
    var h = "from parent's parent function."
    function x() {
        var a = 10;
        function y() {
            console.log(a)
            console.log(h)
        }
        a = "reference is stored with function when closure is formed.";
        return y
    }
    h = "from parent's parent function. edited"
    return x()
}
z = g()
z()