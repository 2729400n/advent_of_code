const needle="XMAS"
function xmasCounter(testInput,needle_) {
    // create the counter
    const needlelen =needle_.length
    const needleDist=needlelen-1
    let holder = 0;
    testInput = testInput.split(/[\r\n]+/)
    for (let indexi = 0; indexi < testInput.length; indexi++) {
        for (let indexj = 0; index < testInput[indexi].length; index++) {
            const element = testInput[indexi][indexj];
            if(element=="X"){
                top=indexi-needle+1
                bottom = indexi+needle-1
                left=indexj-needle+1
                right = indexj+needle-1
            }
        }
        
    }
    // return counter
    return holder;
}

function countGrid(x,y,left,top,right,bottom){
    flatMap = ""
    for (let index = top; index < bottom; index++) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            const element = array[index];
        }
        
    }
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