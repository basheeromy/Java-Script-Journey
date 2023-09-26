/*
    The global setTimeout() method sets a timer which executes a
    function or specified piece of code once the timer expires.

    The setTimeout function in JavaScript is designed to work
    asynchronously to enable non-blocking operations and avoid
    freezing the main (UI) thread. This asynchronous behavior is
    crucial for maintaining the responsiveness of web applications
    and preventing them from becoming unresponsive or sluggish.

    Event Loop Mechanism: JavaScript is single-threaded, meaning
    it has only one main thread of execution. When you execute a
    piece of code, it runs sequentially on this single thread.
    Long-running operations, such as CPU-intensive calculations
    or network requests, can block this thread and make the
    application unresponsive.

    Callbacks and Callback Queue: To handle asynchronous tasks,
    JavaScript uses a callback mechanism. When you call setTimeout,
    you provide it with a callback function and a time delay.
    JavaScript schedules the execution of this callback function
    after the specified delay.

    Concurrency with the Event Loop: JavaScript's event loop is
    responsible for managing the execution of asynchronous tasks.
    It continuously checks the call stack (the place where synchronous
    code runs) and the callback queue (where asynchronous tasks
    like setTimeout callbacks are queued).

a.  You call setTimeout(callback, delay).

b.  JavaScript sets a timer for the specified delay.

c.  The rest of your code continues to execute (non-blocking).

d.  When the timer expires, the callback function is moved to the
    callback queue.

e.  The event loop checks the callback queue for pending tasks.

f.  When the call stack is empty (i.e., no synchronous code is running),
    the event loop picks up the callback function from the queue and
    executes it.


    This mechanism allows other tasks to run concurrently with the timer,
    keeping the application responsive. It's especially crucial in web
    development to prevent the user interface from freezing while
    waiting for operations like network requests or animations to
    complete.

    In summary, setTimeout and other asynchronous functions in
    JavaScript use the event loop to schedule and execute callbacks
    after a specified delay. This allows for non-blocking behavior,
    ensuring that the main thread remains responsive to user
    interactions.

*/

function x() {
    var i = "Yes";
    setTimeout(function () {
        console.log(i); // this will print after .5 seconds.
    }, 500);
    console.log("Everything working as expected.") // this will print first.
}
x()

console.log('----------------------')

/*
    when you use a callback function with setTimeout, you often create
    a closure. A closure is a function that has access to the variables
    and parameters of its containing (enclosing) function, even after
    the containing function has finished executing. This behavior allows
    you to maintain the context and state of variables within the callback
    function.

    Here, if we run the bellow given codes. we can see that it prints
    6 all the time even we called callback function with different va
    lues of j, the reason behind it is we are storing reference to the
    actual memory location of j and not value of j. so, for each call
    back in each iteration, we get same value from same location as call
    back moved to asynchronouse task que and loop continued to change j's
    value.
*/


for (var j = 1; j <=5; j++) {
    setTimeout(function() {
        console.log(j)
    }, j * 1000)
}

// use let key word to solve this issue as let has special block memory.

/*
    Using let inside a setTimeout within a for loop can be a bit tricky
    due to the way closures and variable scoping work in JavaScript. If
    you want to use let effectively to capture the loop variable's value
    for each iteration, you should create a new variable for each
    iteration of the loop. This is because let has block scope, which
    means it creates a new variable for each block it's declared in.
*/

for (let k = 6; k <=10; k++) {
    setTimeout(function() {
        console.log(k)
    }, k * 1000)
}

/*
    we can achive the same with var too. to do it, use the benefits of
    closure and functions.
*/

for (let p = 11; p <=15; p++) {
    function s(h) {
        setTimeout(function() {
            console.log(h)
        }, h * 1000)
    }
    s(p)
}

/*
    Here, as we pass the value as argument to the function which contains
    the setTimout function, even we use var in loop, closure will create
    seperate variable inside the loop as the parameter value. so it works
    same as using let in the above given example.
*/