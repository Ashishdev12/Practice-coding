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

Function.prototype.myBind = function(obj, ...args){
    obj.myFun = this
    return function(){
        obj.myFun(...args)
    }       
}

const result = Introduce.myBind(per1,"Coder", 90000)
result()

const result2 = Introduce.myBind(per2,"Developer", 100000)
result2()