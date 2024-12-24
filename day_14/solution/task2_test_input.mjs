const mulMatcher = /(?<=.*)mul\((\d{1,3}),(\d{1,3})\)(?=.*)|don't\(\)|do\(\)/g


function mulCount(testInput) {
    let holder = 0, doOperations=true;
    for( let testMatch of testInput.matchAll(mulMatcher)){
        if( 'do' == testMatch[0].slice(0,2)){
            doOperations=testMatch[0]=="do()";
        }else if(doOperations){
        holder+=Number.parseInt(testMatch[1])*Number.parseInt(testMatch[2]);
        }
    } 
    return holder;
}

let data= "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
console.log(data)
let count=mulCount(data.trim())

console.log(count)