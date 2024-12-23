
// acquire from your cookie 
// found using web inspector and network tab
// or document.cookie in the console tab 
const sessionID = "53616c7465645f5f29108ba821eb44ae386ba096d9e8dc2f07d50c6c80836308c6ca5ddc4988a76092a7971868236a3cb47f1dd6218cb7bbc0b97fcf18f7f315"

/*
Recieve the input using the fetch api
*/
async function receieve(level) {
    let req = new Request(
        `https://adventofcode.com/2024/day/${level}/input`,
        {
            method: "GET",
            headers: {
                Cookie: `session=${sessionID};`
            }
        }
    )
    let resp = await fetch(req)
    resp = await resp.text()
    return resp
}

/*
Submit and pull response using the fetch api
*/
async function submit(level, awnser, task = 1) {
    let req = new Request(
        `https://adventofcode.com/2024/day/${level}/awnser`,
        {
            method: "POST",
            headers: {
                Cookie: `session=${sessionID};`
            },
            cache: "no-cache",
            redirect: "follow",

        }
    )
    new ReadableStream(`level=${task}&answer=${awnser}`)
    let resp = await fetch(req)
    resp = await resp.text()
    return resp
}

function textToMatrix(data = "", rowDelimitter = /[\r\n]+/,
    colDelimiter = /[,\r\n]+/,
    colMajor = false,
    dataTransform = (x) => (x),
    preTransform = (x) => (x.trim())
) {
    data = preTransform(data).split(rowDelimitter).map((val) => preTransform(val).split(colDelimiter).map(dataTransform))
    if (colMajor) {
        for (let indexi = 0; indexi < data.length; indexi++) {
            for (let indexj = 0; indexj < data[indexi].length; indexj++) {
                const elem1 = data[indexi][indexj],
                    elem2 = data[indexj][indexi];
                data[indexi][indexj] = elem2;
                data[indexj][indexi] = elem1;
            }

        }
    }

}

export default receieve
export { receieve, submit, textToMatrix }