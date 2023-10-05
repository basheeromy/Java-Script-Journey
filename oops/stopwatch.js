/*
    This is a simple stop watch with start, pause, stop, reset, read
    functionalities.
*/

let stopWatch = function() {
    let start, end, is_active;


    this.start = function () {
        start = new Date();
        console.log("timer started.");
        console.log(start);
    };
    this.stop = function () {
        end = new Date();
        console.log("timer stoped");
        console.log(end);
    };
    this.read = function () {
        let duration = end - start;
        console.log(duration)
    }
}



// ===========

sw = new stopWatch();
sw.start();
setTimeout(function() {
    sw.stop();
},5000);
setTimeout(function(){
    sw.read();
}, 5500);
