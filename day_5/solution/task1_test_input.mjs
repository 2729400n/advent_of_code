function computePrecedencep(ordering) {

}


let [ordering,data]= `
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
`.trim().replaceAll(/\r/g,"").split(/\n{2}/g,1)

let left=ordering.split(/\n/g).map((val)=>val.trim().split(/\|/)).flat().filter((val,index)=>((index&1)==0))

let uniqueIndeces = new Set(left)
let leftjoin = left.join(",")
for (const element of uniqueIndeces) {
    console.log(`${element} : ${(new Array(...leftjoin.matchAll(element))).length}`)
}

//
foundSymbols= new Set([...data.matchAll(/\d+/)])