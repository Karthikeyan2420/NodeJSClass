// Simple callback example

function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // calling the callback function
}

function sayBye() {
    console.log("Goodbye!");
}
function sendmsg()
{
    console.log("message sent")
}
// pass 'sayBye' as callback
greet("John", sayBye);
greet("harish", sendmsg)
