/*
1. Write reverseInPlace() method for Array - it should modify the array given as argument by reversing its elements.
let arr = [1, 2, 3, 4, 5];
reverseInPlace(arr);
console.log(arr);
// → [5, 4, 3, 2, 1]
*/

let arr = [1, 2, 3, 4, 5, 6]

console.log(`before:${arr}`)

function reverseInPlace(array) {
    let current
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        current = array[i]
        array[i] = array[array.length - i - 1]
        array[array.length - i - 1] = current
    }
    return array
}

arr = reverseInPlace(arr)
console.log(`after:${arr}`)