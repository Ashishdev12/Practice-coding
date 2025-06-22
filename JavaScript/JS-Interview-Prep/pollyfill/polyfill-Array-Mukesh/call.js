const per1 = {
    name: "Ashish",
    age: 34
}

const per2 = {
    name: "Sindhu",
    age: 32
}

function Introduce(status, salary,){
    console.log(`mySelf ${this.name} and my age is ${this.age} and I am ${status} and my salary ${salary}`);
}

Function.prototype.myCall = function(obj, ...args){
        obj.myFun = this
        obj.myFun(...args)
        
}

Introduce.myCall(per1,"Coder", 90000)
Introduce.myCall(per2,"Developer", 100000)

// Introduce.call(per1,"Coder", 70000)
// Introduce.call(per2,"developer", 80000)