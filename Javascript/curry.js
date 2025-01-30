// General currying function (works for any number of arguments)
function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args); // If enough arguments are provided, call the function
      } else {
        return function(...next) {
          return curried(...args, ...next); // Otherwise, accumulate arguments and return another function
        };
      }
    };
  }
  
  function multiply(a, b, c) {
    return a * b * c;
  }
  
  const curriedMultiply = curry(multiply);
  
  console.log(curriedMultiply(2)(3)(4)); // Output: 24
  console.log(curriedMultiply(2, 3)(4)); // Output: 24
  