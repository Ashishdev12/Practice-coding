const radius = [1,2,3];

const area = (radius) => { // Area = π×r 
    2
    return Math.PI * radius * radius
}

const diameter = (radius) => { // Diameter = 2×r
    return radius * 2
}

const circumference = (radius) => { // Circumference = 2×π×r
    return 2 * Math.PI * radius
}

// const calculate = (radius,logic) => {
//     let output = [];
//     for(let i =0; i<radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }

const calculate = (radius, logic) => {
     let output = [];
     radius.map((num)=> {
      output.push(logic(num))
     })
     return output
     
    
}

// console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
// console.log(calculate(radius, circumference));


