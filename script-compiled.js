'use strict';

var sayHello = function sayHello() {
    return alert('Hello world!');
};
sayHello();

var greeting = 'Hello User!';
function greetWorld(isGreeting) {
    if (isGreeting) {
        // kod wykona się jeśli flaga isGreeting = true
        var greeting = 'Hello World!'; // (A) zasięg: cała funkcja
        return greeting;
    }
    return greeting; // zadziała hoisting i greeting nie będzie tym czym się spodziewamy
}
greetWorld(false); // undefined
