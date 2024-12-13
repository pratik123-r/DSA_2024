// function sum(a) {
//     let total = a;
  
//     function nextSum(b) {
//       total += b;
//       return nextSum;
//     }
  
//     nextSum.valueOf = function() {
//       return total;
//     };
  
//     return nextSum;
//   }
  
//   console.log(sum(1)(2)(3)(4).valueOf());

// function sum(...args) {
//     let total = args.reduce((acc, curr) => acc + curr, 0);
  
//     function nextSum(...nextArgs) {
//       if (nextArgs.length === 0) {
//         return nextSum;
//       }
//       total += nextArgs.reduce((acc, curr) => acc + curr, 0);
//       return nextSum;
//     }
  
//     nextSum.getSum = function() {
//       return total;
//     };
  
//     return nextSum;
//   }
  
//   // Usage example:
//   console.log(sum(1,2,3)(2)(3)(4)()()(3,4)(5,6,42,2).getSum()); // returns 69


// function sum(...args) {
//     return args.reduce((acc, num) => acc + num, 0);
// }

// function curry(fn) {
//     let accumulatedArgs = [];

//     function curried(...args) {
//         accumulatedArgs = [...accumulatedArgs, ...args];
//         return curried;
//     }
//     curried.ans = function ()  {
//         return fn(...accumulatedArgs)
//     }
//     return curried;
// }

// Test the function
// let curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3)());        // Output: 6
// console.log(curriedSum(1, 2, 3)());        // Output: 6
// console.log(curriedSum(1, 2)(3)());        // Output: 6
// console.log(curriedSum()(1, 2)()(3)().ans());    // Output: 6

// function sum(a,b,c) {
//     return a+b+c;
// }
// const curry = (fn) => {
//     const curried = (...args) => {
//       if (args.length >= fn.length) {
//         return fn(...args);
//       } else {
//         return (...nextArgs) => curried(...args, ...nextArgs);
//       }
//     };
//     return curried;
//   };


// let curriedSum = curry(sum);

// console.log(curriedSum()(1, 2, 3)()(3));

function sum(a, b, c) {
    return a+b+c;
    return args.reduce((acc, num) => acc + num, 0);
}
//let ans = []
// function curry(fn) {
//     let accumulatedArgs = [];

//     function curried(...args) {
//         accumulatedArgs = [...accumulatedArgs, ...args];
//         return curried;
//     }
//     curried.ans = function ()  {
//         return fn(...accumulatedArgs)
//     }
//     return curried;
// }

const curry = (fn) => {
    const curried = (...args) => {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function(...nextArgs) {
              return curried(...args, ...nextArgs)
        }
      }
    };
    return curried;
  };

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));
// console.log(curriedSum(1)()(2)(5));