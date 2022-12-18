/*
2. Write a program which will print numbers from 1 to N, with the following conditions: 
* if a number is divisible by 3, but not divisible by 5, print 'foo' instead of a number
* if a number is divisible by 5, but not divisible by 3, print 'bar' instead of a number
* if a number is divisible by both 3 and 5, print 'foobar' instead of number. Example:
1
2
foo
4
bar
foo
...
*/

const N = 100

for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log("foo")
    } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log("bar")
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("foobar")
    } else {
        console.log(i)
    }
}