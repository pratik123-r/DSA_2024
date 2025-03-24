Function.prototype.myCall = function(context, ...args) {
   
    // Default `context` to global object (window in browsers)
    context = context || window;
    const uniqueKey = Symbol();    
    context[uniqueKey] = this;

    const result = context[uniqueKey](...args);
    // Remove the unique property to avoid side effects
    delete context[uniqueKey];
    return result;
};

// Example usage
function greet (message, bind) {
    console.log(`${message}, ${this.name}!, ${bind}`);
}

const user = { name: 'John' };
greet.myCall(user, 'Hello', 'cccd'); // Output: Hello, John!


Function.prototype.myBind = function (context, ...args) {    
    let fn = this;
    let otherArgs = [...args]
    return function(...args) {
        fn.myCall(context, ...[...otherArgs, ...args])
    }
}
let myfun = greet.myBind(user, 'Hello')

myfun('pratik')
