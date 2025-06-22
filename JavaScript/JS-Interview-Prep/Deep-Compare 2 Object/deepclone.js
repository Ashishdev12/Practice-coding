const obj1 = {
    a: 1,
    b:2,
    c:{
        d:3
    },
    e: new Date(),
    f: undefined
}

function createDeepClone(obj){
    const copyObj = {}
    for(let key in obj){
        const value = obj[key]
        if(value instanceof Date){
            copyObj[key] = new Date(value.getTime())
        }
        else if(typeof value !== "object"){
            copyObj[key] = value
        } else {
            copyObj[key] = createDeepClone(value)
        }  
    }
    return copyObj
}
const obj2 = createDeepClone(obj1)
console.log(obj1, obj2);
