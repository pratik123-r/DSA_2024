let object1 = {
    name: "Pratik",
    city: "Rajkot",
    getIntro: () => {
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name: "Ravi"
}

// prototype in heritance
object2.__proto__ = object1
console.log(object2.name);

Function.prototype.mybind = function () {
    console.log("hahah");
}

function name () {

}

name.__proto__.mybind()

//In JavaScript, a prototype is an object that provides properties and methods to other objects. Every JavaScript object has a prototype, which allows objects to inherit features from each other. 






