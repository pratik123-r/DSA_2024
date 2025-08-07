const pipe = (obj) => {
  // return another function that will accept all the args
  return function(...args){
    // iterate the keys of the object
    for (let key in obj) {
        // get the value
        let val = obj[key];
      
        // if the value is a function
        if (typeof val === 'function') {
            // pass the args to the function
            // store the result on the same key
            obj[key] = val(...args);
        }
        else {
            // else recursively call the same function
            // if it is nested object it will be further processed
            pipe(val)(...args);
        }
    }
    
  }
};

let obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

pipe(obj)(1, 1, 1);

console.log(obj);

// Input:
// {
//   a : {
//     b : (a,b,c) => a+b+c,
//     c : (a,b,c) => a+b-c,
//   },
//   d : (a,b,c) => a-b-c
// }

// Fn(obj)(1,1,1);

// Output:
// {
//   a : {
//     b : 3,
//     c : 1
//   },
//   d: -1
// }


const pipe2 = function(...fns){
  
  // form a closure with inner function
  return function(val){
    // run the value through all the functions
    for(let f of fns){
      val = f(val);
    }
    
    // return the value after last processing
    return val;
  };
};

// Input:
const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const val = { salary: 10000 };

const result = pipe2(
  getSalary,
  addBonus,
  deductTax 
)({ salary: 10000 });

console.log(result);