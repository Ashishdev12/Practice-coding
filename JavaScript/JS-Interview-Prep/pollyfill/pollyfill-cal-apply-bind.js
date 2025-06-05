// let car1 = {
//     color: "red",
//     company: 'Ford'
// }


// function purchaseCar(currency, price){
//     console.log(`I have Purchased ${this.color} - ${this.company} car for ${currency}${price}`);
// }

// Function.prototype.myCall = function(context = {}, ...args){
//     if(typeof this !== 'function'){
//   throw new Error(this + 'Its not callable')
//     }

//     context.fn = this;
//     context.fn(...args);
// };

// purchaseCar.myCall(car1, '$','7000000');


//------------------Apply ------------------

// let car1 = {
//     color: "red",
//     company: 'Ford'
// }


// function purchaseCar(currency, price){
//     console.log(`I have Purchased ${this.color} - ${this.company} car for ${currency}${price}`);
// }

// Function.prototype.myApply = function(context = {}, args = []){
//     if(typeof this !== 'function'){
//   throw new Error(this + 'Its not callable')
//     }

    // if(!Array.isArray(args)){
    //     throw new Error("CreateListFromArrayLike called on non-objects")
    // }
//     context.fn = this;
//     context.fn(...args);
// };

// purchaseCar.myApply(car1, ['$','7000000']);


// ------------------- bind ------------------

let car1 = {
    color: "red",
    company: 'Ford'
}


function purchaseCar(currency, price){
    console.log(`I have Purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== 'function'){
  throw new Error(this + 'Its not callable')
    }

    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }
};

const newFunc = purchaseCar.myBind(car1,'7000000');
newFunc('$')


