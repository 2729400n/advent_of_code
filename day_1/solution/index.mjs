import receieve from "../../utils/recieve_submit.mjs"

function checkDifference(inputString) {
    // pre-Declare value so its not lost in try scope
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
    // sort both arrays
    left.sort()
    right.sort()

    // create and array that aggregates the 
    // inner absolute difference 
    // of left and right 
    return left.map((val,index)=>Math.abs(val-right[index])).reduce((lv,rv)=>(lv+rv))
}

let data = await receieve(1)
console.log(checkDifference(
    data
))


