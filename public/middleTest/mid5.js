let s = [];

for(let i = 0 ; i < 100 ; i++)
    s[i] = Math.floor(Math.random() * 100 + 1); // 1 이상 100 이하

let array = s.filter((e) => e % 2 === 0 );

let sum = array.reduce(callback)

console.log(sum)

function callback(a, b) {
    return a + b;
}