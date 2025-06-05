const calculate = {
    value: 0,

    sum: function(...no){
        
        this.value = this.value + no
        return this
    },
    add: function(no){
        this.value = this.value + no
        return this
    },

    subtract: function(no){
        this.value = this.value - no
        return this
    },
    multiply: function(no){
        this.value = this.value * no
        return this
    },
    getValue: function(){
        return this.value
    }
}

// let result = new calculate.add(4)
let result = calculate.sum(3,4,5,6).add(4).add(5).subtract(5).multiply(2).getValue();
console.log("Total is", result);