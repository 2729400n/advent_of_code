async function receieve(level,sessionID){
    let req = new Request(`https://adventofcode.com/2024/day/${level}/input`)
    req.headers.set("Cookie",`session=${sessionID};`)
    let resp=await fetch(req)
    resp=await resp.text()
    return resp
}
export default receieve
export {receieve}