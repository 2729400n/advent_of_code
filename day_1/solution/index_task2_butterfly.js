import receieve from "../../utils/recieve_submit.mjs"

function chechSimilarity(inputString) {
    let value;
    try {
        value = JSON.parse("[" + inputString.replaceAll(/(?<=[0-9])\s+(?=[0-9])/g, ",") + "]");
      
    } catch (e) {
        console.log(inputString)
        throw new TypeError("Could not parse input String!")
    }

    // The good old js way. "butterflying it" 
    let left ={}, right = {}, outSimil = 0;
    let i=0;
    for (let index = 0; index < value.length; index += 2) {
        const [elem0, elem1] = value.slice(index, index + 2);
        left[elem0]= (left[elem0] || 0) + 1
        right[elem1]= (right[elem1] || 0) + 1

    }
    
    i=0;
    for (const key in left) {
        /*javascript even guesses types when appropriate*/
        outSimil+=left[key]*Number.parseInt(key)*(right[key]||0)
        if ((i<98)&&(right[key]!==undefined)){
           console.log(`${key}:${left[key]} * ${right[key]}\n`)
        }
    }
    return outSimil

}
let data = await receieve(1)
console.log(chechSimilarity(
    data
))