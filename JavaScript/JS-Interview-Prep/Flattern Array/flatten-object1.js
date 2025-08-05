// Group an array of objects by the 'city' property.
// Input: 
const data = [
 { name: 'Alice', city: 'New York' },
 { name: 'Bob', city: 'London' },
 { name: 'Charlie', city: 'New York' }
]

const gropeByCity = data.reduce((acc, curr)=>{
    const city = curr.city
    if(!acc[city]){
        acc[city] = []
    } 
    acc[city].push(curr);
    return acc
},{})

console.log(gropeByCity);
