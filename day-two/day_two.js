import input from "./input";
let safe = 0

const reports = input.trim().split('\n')
const levels = reports.map(report => report.split(" ").map(Number))
console.log(levels)

for (let arr = 0; arr < levels.length; i++) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1] && arr[i] > arr[i - 4]) {
            safe += 1
        }

    }
}
