/*
    When the JavaScript engine scans a script file, it makes an
    environment called the Execution Context that handles the
    entire transformation and execution of the code.
*/

// There are two phases of JavaScript execution context:

/*
    Creation phase: In this phase, the JavaScript engine creates
    the execution context and sets up the script's environment.
    It determines the values of variables and functions and sets
    up the scope chain for the execution context.

    Execution phase: In this phase, the JavaScript engine executes
    the code in the execution context. It processes any statements
    or expressions in the script and evaluates any function calls.
*/

/*
    Memory component and Code component are the two componenets of
    js execution context.

    Memory (Data) Component:

    The memory component in JavaScript refers to the storage and
    management of data during the execution of your program.

    It includes variables, objects, arrays, and other data structures
    that hold values and state.
*/

/*
    Code (Execution) Component:

    The code component in JavaScript refers to the executable
    instructions that make up your JavaScript program.

    This component includes functions, statements, and control
    flow constructs (e.g., loops, conditionals) that define the
    logic of your program.

    The code component is executed by the JavaScript engine,
    line by line, following the order of execution specified in
    your code.

    JavaScript is single-threaded, meaning it can only execute
    one piece of code at a time, and it uses a call stack to
    manage function calls and track the execution flow.

*/

var n = 2;
function square (num) {
    var ans = num * num;
    return ans;
}

var square1 = square(n);
var square2 = square(square1)

console.log(square1)
console.log(square2)

/*

    In the above given code, we can see what happens during
    creation phase of execution context

    inside memory component

    ---------------------------

    n = undefined # declaring a varialbe
    square = {
        var ans = num * num;
        return ans;
    }

    square1 = undefined
    square2 = undefined

    ---------------------------

    here we can see that all variables are allocated in memory
    with a special value undefined.

    also, function is sotored with it's whole codes

*/

/*

    Now, we can see what happens during execution phase.

    > n = 2
    > square1 = (invoking the square function) = 4

        # creating special execution context for function.
          follow the same steps for an execution context

          # creation phase
            > num : undefined
            > ans : undefined

          # execution phase
            > num = (n=2) = 2
            > ans = num * num = 2 * 2 = 4
            > return 4
        # return the value and special execution context
          is destroyed.

    > square2 = (
        invoking the square function by passing square1
        as argument. and witing for value get returned.
        ) = 16

        # creating special execution context for function.
          follow the same steps for an execution context

          # creation phase
            > num : undefined
            > ans : undefined

          # execution phase
            > num = (square1 = 4) = 4
            > ans = num * num = 4 * 4 = 16
            > return 16
        # return the value and special execution context
          is destroyed.

    > console.log(square1) # printing 4 in console
    > consele.log(square2) # printing 16 in console

*/
