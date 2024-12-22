let testInput = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
mulMatcher = /(?<=.*)mul\((\d{1,3}),(\d{1,3})\)(?=.*)/g
let holder = 0
    for( let testMatch of testInput.matchAll(mulMatcher)){
        holder+=Number.parseInt(testMatch[1])*Number.parseInt(testMatch[2])
    } 
console.log(holder)
debugger