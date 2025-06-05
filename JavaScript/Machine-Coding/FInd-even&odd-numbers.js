const intArray = [1,2,3,4,5,6,7,8,9,10];

const even = intArray.filter((num)=> {
    if(num % 2 ==! 0){
        return 'even'
    } else {
        'odd'
    }
})

console.log(even);