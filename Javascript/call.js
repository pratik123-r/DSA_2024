let name1 = {
    firstname: "Pratik",
    lastname: "Rajkotiya",
    printFullname: function () {
        console.log(this.firstname + " " + this.lastname);
        
    }
}

name1.printFullname() //Pratik Rajkotiya
let x = name1.printFullname
x() // undefined undefined
x.call(name1) // Pratik Rajkotiya

let name2 = {
    firstname: "Raj",
    lastname: "Savsani",
}
x.call(name2) // Raj Savsani

name1.printFullname.call(name2) // Raj Savsani


let printLastname = function (hometown) {
    console.log("printLastname", this.lastname, hometown) ; 
}
// let printLastname =  ()=> {
//     console.log("printLastname", this.lastname); // printLastname undefined
// }
printLastname.call(name1, "Pune") // printLastname Rajkotiya Pune

//////////// apply
printLastname.apply(name1, ["Pune"]) // printLastname Rajkotiya Pune

///// Bind
let printName = printLastname.bind(name1, "Pune")
printName()

Function.prototype.myBind = function (obj, ...args) {
    console.log(args);
    
    return function (params) {
       this 
    }
}

printLastname.myBind(name1, "Pune")




