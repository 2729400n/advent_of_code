function computePrecedencep(ordering) {

}


let [ordering, data] = `
47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47
`.trim().replaceAll(/\r/g, "").split(/\n{2}/g, -1)
let left, right;

{
    let viel = ordering.split(/\n/g).map((val) => val.trim().split(/\|/)).flat();
    left = viel.filter((val, index) => ((index & 1) == 0)),
        right = viel.filter((val, index) => ((index & 1) != 0));
}


let uniqueIndeces = new Set([...left, ...right])
let leftjoin = left.join(",")
// let foundSymbols = new Set([...data.matchAll(/\d+/g)].map((val) => val[0]))
let boxTable=new Array(uniqueIndeces.size)
for (const element of uniqueIndeces) {
    boxTable[uniqueIndeces.size-([...leftjoin.matchAll(element)]).length-1]=element;
}

let lineFinder=RegExp(boxTable.map((x,index)=>(`((^(${x}))|((\\D+(${x}))*))`)).join("")+"(?=[\r\n])","g")
console.log(([...data.matchAll(lineFinder)]))
data = data.split(/[\r\n]+/g).map((line) => ([...line.matchAll(/\d+/g)].map((x) => Number.parseInt(x[0]))))


//
// console.log([...foundSymbols])

debugger

//use this then reduce the value till you get zero