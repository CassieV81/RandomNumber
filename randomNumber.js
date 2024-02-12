
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

const randomNumber = (arr) => {
    const date = new Date;
    const primeNumber = 17;
    const largeNumber = date.getTime() * primeNumber;
    let randomIndex = largeNumber % arr.length;
    return arr[randomIndex];
}
let a = randomNumber(x);
console.log(a)

function generateNumbers(arr, n) {
    let num = [];
    let a;
    while (num.length < n) {
        a = randomNumber(arr);
        if (!num.includes(a)){
            num.push(a)
        }
    }
    return num;
}
console.log(generateNumbers(x, 5))