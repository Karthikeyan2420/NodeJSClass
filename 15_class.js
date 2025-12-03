const EventEmitter = require("events");

// Create an EventEmitter object
const emitter = new EventEmitter();


// -----------------------
// 1) EVENTEMITTER EXAMPLE
// -----------------------

emitter.on("hello", () => {
    console.log("EventEmitter: Hello Event Received!");
});
emitter.on("bye", () => {
    console.log("EventEmitter: Bye!");
});

// Emit event
emitter.emit("hello");
emitter.emit("bye");