function compareObj(o1, o2) {
  if (typeof o1 !== "object" || typeof o2 !== "object") {
    return false;
  }

  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const k of keys1) {
    if (!o2.hasOwnProperty(k)) {
      return false;
    }

    const value1 = o1[k];
    const value2 = o2[k];

    if(value1 instanceof Date & value2 instanceof Date){
        if(value1.getTime() !== value2.getTime()){
            return false
        }
    }
   else if (typeof value1 === "object" && typeof value2 === "object") {
      if (!compareObj(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
}

const obj1 = {
  a: 1,
  b: 2,
  c: { d: 3 },
  e: new Date("2021-03-25"),
  f: [1,2,3,5]
};

const obj2 = {
  b: 2,
  a: 1,
  c: { d: 3 },
  e: new Date("2021-03-25"),
  f: [1,2,3,5]
};

console.log(compareObj(obj1, obj2));
