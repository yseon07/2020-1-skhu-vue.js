function sum(array) {
    let s = 0;
    for(let i = 0 ; i < array.length ; i++)
        s += array[i];
    return s
}

function test_sum(sum) {
    let s = [] // 랜덤값 범위 0 ~ 10
    for(let i = 0 ; i < 5 ; i++)
        s[i] = Math.floor(Math.random() * 11);
    console.log(sum(s))
}

for(let i = 0 ; i < 5 ; i++)
    test_sum(sum)