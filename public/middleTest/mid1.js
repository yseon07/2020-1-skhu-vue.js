let s = [];
let sum = 0;

for(let i = 0 ; i < 100 ; i++) {
    s[i] = Math.floor(Math.random() * 100 + 1); // 1 이상 100 이하
    sum += s[i];
}

let average = sum / 100;

console.log(average.toFixed(1));