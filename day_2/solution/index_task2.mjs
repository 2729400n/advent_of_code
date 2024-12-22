import receieve from "../../utils/recieve_submit.mjs"
function verifySafety(report) {
    let max = report[0], min = max, direction = (report[1] - min) < 0 ? -1 : 1;

    // Gonna use a fake thread given a higher priority
    // Technically can have time Complexity O(n) with forward and back but really O(2N) want O(N+1) 
    for (let i = 1, lineint = 0, testedAlt = false, testAlt = false; i < report.length; i++) {

        // find the diffrence and the maginitude of the difference
        let valueDifference = (report[i] - min), absDifference = Math.abs(valueDifference);

        // if we have a bad level 
        if (((valueDifference * direction) < 0) || (Math.abs(absDifference - 2) > 1)) {

            // increment the bad level count
            lineint += 1

            // More than 1 bad level 
            if (lineint > 1 ) {

                // and index is not 2
                if((i!=2))
                    // then we have passed the given amount 
                    return false;

                // if the erorr occurs at the second level 
                // check if we have tested the alternative    
                if(testedAlt){
                    // we can return false 
                    return false
                }
            }

            // if we have an erorr between the second and third element
            // we may have an error between the first and the rest in direction 
            if (i == 2) {
                // if we havent already tested for this case
                if (!testedAlt) {
                    // test this case

                    // switch the direction
                    direction = 0 - direction;
                    // make sure we recheck this i if we change directions
                    i -= 1

                    // if we can still use the test fake thread 
                    if (testAlt) {
                        // make sure we cant use test alt again
                        testAlt = false
                    }else{
                        // broadcast that we have tested that line of thinking
                        testedAlt = true
                    }
                }
            }

            // else skip erroring level
            continue;
        }

        // move to next level
        min = report[i]

    }
    return true
}

function columnFirstMatrix(value) {
    let values = value.trim().split(/[\r\n]+/)
    values = values.map((val) => { return val.split(/\s/).map((x) => Number.parseInt(x.trim())) })
    return values
}

function countSaftey(reports) {
    let count = 0;
    for (const index in reports) {
        count += verifySafety(reports[index]) ? 1 : 0
    }
    return count
}

let data = await receieve(
    2,
    "53616c7465645f5f29108ba821eb44ae386ba096d9e8dc2f07d50c6c80836308c6ca5ddc4988a76092a7971868236a3cb47f1dd6218cb7bbc0b97fcf18f7f315"
)
data = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`
let matrix = columnFirstMatrix(
    data
)
console.log(countSaftey(matrix))




