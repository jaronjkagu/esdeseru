const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };

console.log(objectEqual(obj1, obj2)); // Output: true
console.log(objectEqual(obj1, obj3)); // Output: false
