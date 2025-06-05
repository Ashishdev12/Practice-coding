function add(a) {
    return function(b) {
        if (b === undefined) {
            return a; // Return the accumulated sum when no argument is provided
        }
        return add(a + b); // Continue adding
    };
}

console.log(add(1)(2)()); // Output: 3
console.log(add(1)(2)(3)()); // Output: 6
console.log(add(5)()); // Output: 5

// Please check currying also