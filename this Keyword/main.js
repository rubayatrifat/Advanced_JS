// This in global scope
console.log(this)

// This in function
function thisKey() {
    console.log(this)
}

// thisKey()

// this in method
const obj = {
    name: "Pablo",
    func: function() {
        console.log(this.name)
    }
}

obj.func()


// This in event handler
// document.querySelector("h1").addEventListener("click", () => {
//     console.log(this) // Output: the H1
// })


// This behaviors
/**
 * This in global  - window
 * this inside a func - window
 * method with es5 func - obj
 * method with es6 arrow func - window
 * method with es5 func inside a es5 func - window
 * method with es6 func inside a es5 func - obj
 * event handler - element
 * class - blank obj
 */


// Changiing default behavior of thin inside a function

let obj2 = {
    name: "Rubayat Rifat",
    role: "System Designer"
}

function callName(para1, para2) {
    console.log(para1 + ", " + para2)
    console.log(this.name)
}

callName.call(obj2, "someghing", "nothing")
callName.apply(obj2, ["someghing", "nothing"])
const newFnc = callName.bind(obj2, "someghing", "nothing")

newFnc()