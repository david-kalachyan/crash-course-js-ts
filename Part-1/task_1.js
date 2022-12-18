
let char = current = "C"
let count_rows = 100


for (let i = 0; i < count_rows; i++) {
    if (i === 0) {
        console.log(char)
    } else {
        current += char
        console.log(current)
    }
}
