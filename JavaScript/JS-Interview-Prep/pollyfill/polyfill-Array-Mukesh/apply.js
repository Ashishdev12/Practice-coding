const per1 = {
    name: "Ashish",
    age: 34
}

const per2 = {
    name: "Sindhu",
    age: 32
}

function Introduce(status, salary){
    console.log(`mySelf ${this.name} and my age is ${this.age} and I am ${status} and my salary ${salary}`);
}

Function.prototype.myApply = function(obj, args){
    if(Array.isArray(args)){
        obj.myFun = this
        obj.myFun(...args)

    } else{
         throw new Error("CreateListFromArrayLike called on non-objects")
    }
        
}

Introduce.myApply(per1,["Coder", 90000])
Introduce.myApply(per2,["Developer", 100000])

Introduce.apply(per1,["Coder", 80000])
Introduce.apply(per2,["Developer", 70000])
