import receieve from "../../utils/recieve_submit.mjs"

function checkSimilarity(inputString) {
    let value;
    try {
        value = JSON.parse("[" + inputString.replaceAll(/(?<=[0-9])\s+(?=[0-9])/g, ",") + "]");
      
    } catch (e) {
        console.log(inputString)
        throw new TypeError("Could not parse input String!")
    }

    let left = new Map(), right = new Map(), outSimil = 0;
        let i=0;
        for (let index = 0; index < value.length; index += 2) {
            const [elem0, elem1] = value.slice(index, index + 2);
             left.set(elem0, ( left.get(elem0) || 0) + 1)
            right.set(elem1, (right.get(elem1) || 0) + 1)

        }
        
        // i=0;
        for (const key of left.keys()) {
            outSimil+=left.get(key)*key*(right.get(key)||0)
            // if ((i<98)&&(right.get(key)!==undefined)){
            //    console.log(`${key}:${left.get(key)} * ${right.get(key)}\n`)
            // }
        }
    return outSimil

}

let data = await receieve(1)
console.log(checkSimilarity(
    data
))