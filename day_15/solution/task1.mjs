import receieve from "../../utils/recieve_submit.mjs"

function mulCount(testInput) {
    let holder = 0;
    for( let testMatch of testInput.matchAll(mulMatcher)){
        holder+=Number.parseInt(testMatch[1])*Number.parseInt(testMatch[2]);
    } 
    return holder;
}

let data= `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`.trim()
console.log(data)
let count=mulCount(data.trim())

console.log(count)