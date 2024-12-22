var req = new Request("https://adventofcode.com/2024/day/1/input")
req.headers.set("Cookie", "session=53616c7465645f5f29108ba821eb44ae386ba096d9e8dc2f07d50c6c80836308c6ca5ddc4988a76092a7971868236a3cb47f1dd6218cb7bbc0b97fcf18f7f315;")
console.log(req.headers.get('Cookie'))
var jsonify=/(?<=[0-9])\s+(?=[0-9])/
fetch(req).then(
    (resp) => resp.text().then(
        (value)=>{
            let 
            try {
                value = "["+value.replaceAll(/(?<=[0-9])\s+(?=[0-9])/g,",")+"]"
                value  = JSON.parse(value);
                let left=new Set(),right=new Map(),outdiff=0 ; 
            for (let index = 0; index < value.length; index+=2) {
                const [elem,elem1] = value.slice(index,index+2);
                left.add(elem)
                right.set(elem1,(right.get(elem1)||0)+1)
                               
            }
            delete value
            } catch (e) {
                throw e
            }
            
        }
    )
)

// 30659356