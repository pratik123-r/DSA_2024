// Question
// Asked in Publicis sepient, Meesho
// Level -> Easy
// How would you implement a calculator class with methods for addition,
// subtraction, and multiplication, supporting method chaining?
// calculator.add(3).multiply(4).subtract(5).getValue()
// class Calculator {
// // write code here
// }
// const calculator = new Calculator(2);
// console.log(calculator.add(3).multiply(4).subtract(5).getValue()); //15


class Calculator {
    initialVal;
    constructor() {
        this.initialVal = 0
    }

    add(val) {
        this.initialVal += val
        return this
    }

    multiply(val) {
        this.initialVal *= val
        return this
    }

    subtract(val) {
        this.initialVal -= val
        return this
    }

    getValue() {
        return this.initialVal;
    }

}
let calculator = new Calculator()
let ans = calculator.add(2).multiply(2).subtract(5).getValue()
console.log(ans);
