import receieve from "../../utils/recieve_submit.mjs"
function verifySafety(report){
    let max=report[0],min=max,direction=(report[1]-min)<0?-1:1;
    
    for(let i =1;i<report.length;i++){
        let valueDifference=(report[i]-min),absDifference=Math.abs(valueDifference);
        if(((valueDifference*direction)<0) || (Math.abs(absDifference-2)>1)){
            return false;
        } 
        min=report[i]
    }
    return true
}

function columnFirstMatrix(value){
    let values=value.trim().split(/[\r\n]+/)
    values=values.map((val)=>{return val.split(/\s/).map((x)=>Number.parseInt(x.trim()))})
    return values
}

function countSaftey(reports) {
    let count=0;
    for (const index in reports) {
        count+=verifySafety(reports[index])?1:0
    }
    return count
} 

let data= await receieve(
    2,
    "53616c7465645f5f29108ba821eb44ae386ba096d9e8dc2f07d50c6c80836308c6ca5ddc4988a76092a7971868236a3cb47f1dd6218cb7bbc0b97fcf18f7f315"
)
let matrix=columnFirstMatrix(
    data
)
console.log(countSaftey(matrix))




