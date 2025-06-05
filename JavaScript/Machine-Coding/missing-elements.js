// Find missing number from the array

const intArray = [1,2,3,4,5,6,9,10];

const findMissingNumber = (num) => {
    const missingNumber = [];
    intArray.forEach((element, index)=> {
        if(index + 1 != element){
            missingNumber.push(index + 1)
        }
    })
    return missingNumber;
}

console.log(findMissingNumber(intArray));