let obj1 = {
    age: 2,
    displayAge: function() {
        console.log(this.age);
    }
}


obj1.displayAge() // 2



///////////////////////////////
var name = "outer"
function displayName() {
    console.log(this.name)
}

let obj2 = {
    name: "pratik",
    displayName: displayName
}

let obj3 = {
    name: "raj",
    displayName: displayName
}

obj2.displayName()
obj3.displayName()
displayName() // simillar to  window.displayName()

let x = obj2.displayName
x() // this refers to window (in normal function this refers to function called by following obj)

///////////////////////////////////////
let obj4 = {
    name: "atul",
    sayhello: function () {
        var sayBye =  function() {
            console.log("sayBye",this);  
        }
        var sayGoodBye =  () => {
            console.log("sayGoodBye", this);
        }
        sayBye() // refere to window because if we call directly function that equals to window.sayBye()
        sayGoodBye() // refer to current obj4 because in array function referes this to where this function id declared
    }
}

obj4.sayhello()