var req = new Request("https://adventofcode.com/2024/day/1/input")
req.headers.set("Cookie", "session=53616c7465645f5f29108ba821eb44ae386ba096d9e8dc2f07d50c6c80836308c6ca5ddc4988a76092a7971868236a3cb47f1dd6218cb7bbc0b97fcf18f7f315;")
console.log(req.headers.get('Cookie'))
var jsonify = /(?<=[0-9])\s+(?=[0-9])/

function chechSimilarity(value) {
    try {
        value = "[" + value.replaceAll(/(?<=[0-9])\s+(?=[0-9])/g, ",") + "]"
        value = JSON.parse(value);

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
            outSimil+=left[key]*key*(right[key]||0)
            if ((i<98)&&(right[key]!==undefined)){
               console.log(`${key}:${left[key]} * ${right[key]}\n`)
            }
        }
        console.log(outSimil)
    } catch (e) {
        throw e
    }


}

chechSimilarity(
`
3   4
4   3
2   5
1   3
3   9
3   3
`)
fetch(req).then(
    (resp) => resp.text().then(
        chechSimilarity
    )
)

// 30659356