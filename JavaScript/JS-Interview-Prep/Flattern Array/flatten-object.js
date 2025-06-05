// https://www.geeksforgeeks.org/flatten-javascript-objects-into-a-single-depth-object/



let obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
}

const flattenObj = (obj) => {
    let result = {}; // Initialize an empty object to store the flattened result
    for(let i in obj){ // Loop through each key in the object
        if((typeof obj[i]) === 'object' && !Array.isArray(obj[i])){ // Check if the value is a nested object
            const temp = flattenObj(obj[i]); // Recursively flatten the nested object
            for(let j in temp){ // Loop through the flattened nested object
                result[i + '.' + j] = temp[j]; // Add the flattened keys to the result object
            }
        }
        else { // If the value is not an object, add it directly to the result
            result[i] = obj[i];
        }
    }
    return result; // Return the flattened object
};

console.log(flattenObj(obj));