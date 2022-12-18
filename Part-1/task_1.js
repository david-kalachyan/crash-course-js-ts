/*
1. Write a program which will print to console N rows of a specific char, like this (char = 'C', N = 3):
C
CC
CCC
*/

const char = current = "C"
const count_rows = 100

for (let i = 0; i < count_rows; i++) {
    if (i === 0) {
        console.log(char)
    } else {
        current += char
        console.log(current)
    }
}