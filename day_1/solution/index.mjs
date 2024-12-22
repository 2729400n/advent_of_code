import receieve from "../../utils/recieve_submit.mjs"

function checkDifference(inputString) {
    let value;
    try {
        value = JSON.parse("[" + inputString.replaceAll(/(?<=[0-9])\s+(?=[0-9])/g, ",") + "]");
      
    } catch (e) {
        console.log(inputString)
        throw new TypeError("Could not parse input String!")
    }

    
    let left=[],right=[]; 
    for (let index = 0; index < value.length; index+=2) {
        const [elem,elem1] = value.slice(index,index+2);
        left.push(elem)
        right.push(elem1)
    }
    left.sort()
    right.sort()
    return left.map((val,index)=>Math.abs(val-right[index])).reduce((lv,rv)=>(lv+rv))
}

let data = await receieve(1)
console.log(checkDifference(
    data
))


