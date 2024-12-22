function chechSimilarity(value) {
    try {
        value = "[" + value.replaceAll(/(?<=[0-9])\s+(?=[0-9])/g, ",") + "]"
        value = JSON.parse(value);
        let left = new Map(), right = new Map(), outSimil = 0;
        let i = 0;
        for (let index = 0; index < value.length; index += 2) {
            const [elem0, elem1] = value.slice(index, index + 2);
            left.set(elem0, (left.get(elem0) || 0) + 1)
            right.set(elem1, (right.get(elem1) || 0) + 1)

        }

        i = 0;
        for (const key of left.keys()) {
            outSimil += left.get(key) * key * (right.get(key) || 0)
            if ((i < 98) && (right.get(key) !== undefined)) {
                console.log(`${key}:${left.get(key)} * ${right.get(key)}\n`)
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

