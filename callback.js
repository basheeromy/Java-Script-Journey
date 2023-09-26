/*
    A callback function in JavaScript is a function that is passed as
    an argument to another function and then executed at a later time.
    Callback functions are used to implement a variety of features in
    JavaScript, such as asynchronous programming, event handling, and
    animation.
*/

function myFunction(callback) {
    // Do something
    callback();
}

// Call the function with a callback function
myFunction(function() {
    console.log("Hello from the callback!");
});


/*
   Event listeners in JavaScript are functions that are executed when
   a specific event occurs. For example, you can use an event listener
   to execute a function when a button is clicked, a form is submitted,
   or a user scrolls the page.

   To use an event listener with a callback function in JavaScript, you
   first need to select the element that you want to listen for events
   on. You can do this using the querySelector() method.

   Once you have selected the element, you can use the
   addEventListener()method to attach an event listener to the element.
   The addEventListener() method takes two arguments: the type of event
   to listen for and the callback function to be executed when the event
   occurs.
*/

const button = document.getElementById("button");
console.log(button)

button.addEventListener("click", function() {
  console.log("The button was clicked!");
});
