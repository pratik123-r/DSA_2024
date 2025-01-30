

let arr = [1, 2, 3, 4, 5]

// map 



if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        if (this == null) {
            throw new TypeError("Cannot call map on null or undefined");
        }
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        const result = [];
        const array = this; // Reference to the array
        for (let i = 0; i < array.length; i++) {
            if (i in array) {
                result.push(callback(array[i]));
            }
        }
        return result;
    };
}

// Example Usage:
let mapAns = arr.map((val) => val * 2)
const doubled = arr.myMap((num) => num * 2);

console.log(doubled, mapAns); // Output: [2, 4, 6, 8]




if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initialValue) {
        if (this == null) {
            throw new TypeError("Cannot call reduce on null or undefined");
        }
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        const array = this; // Reference to the array
        let accumulator = initialValue;
        let startIndex = 0;

        // If no initialValue is provided, use the first element of the array as the initial accumulator
        if (accumulator === undefined) {
            if (array.length === 0) {
                throw new TypeError("Reduce of empty array with no initial value");
            }
            accumulator = array[0];
            startIndex = 1; // Skip the first element
        }

        for (let i = startIndex; i < array.length; i++) {
            if (i in array) {
                accumulator = callback(accumulator, array[i], i, array);
            }
        }

        return accumulator;
    };
}

// Example Usage:

const sum = arr.myReduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback, thisArg) {
        if (this == null) {
            throw new TypeError("Cannot call filter on null or undefined");
        }
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        const result = [];
        const array = this; // Reference to the array

        for (let i = 0; i < array.length; i++) {
            if (i in array) {
                // Call the callback with the correct `thisArg`
                if (callback(array[i])) {        
                    result.push(array[i]); // Add element if callback returns true
                }
            }
        }

        return result;
    };
}

// Example Usage:
const evenNumbers = arr.myFilter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]

// mybind

if (!Function.prototype.myBind) {
    Function.prototype.myBind = function (context, ...args) {
        if (typeof this !== "function") {
            throw new TypeError("Bind can only be called on functions");
        }

        const targetFunction = this;

        return function boundFunction(...newArgs) {
            // Combine arguments passed during bind and those during the function call
            return targetFunction.apply(
                context,
                args.concat(newArgs)
            );
        };
    };
}

// Example Usage:
const obj = {
    value: 42,
};

function printValue(prefix, suffix) {
    console.log(`${prefix}${this.value}${suffix}`);
}

const boundFunction = printValue.myBind(obj, "Value: ", "!");
boundFunction(); // Output: "Value: 42!"




