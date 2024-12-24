import receieve from "../../utils/recieve_submit.mjs"

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

let data= await receieve(
    3,
    "53616c7465645f5f29108ba821eb44ae386ba096d9e8dc2f07d50c6c80836308c6ca5ddc4988a76092a7971868236a3cb47f1dd6218cb7bbc0b97fcf18f7f315"
);
console.log(data)
let count=mulCount(data.trim())

console.log(count)