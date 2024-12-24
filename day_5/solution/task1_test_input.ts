interface Block {
    id: number;
    padding?: number;
    size: number;
}
function createDisk(stream: string): string {
    let blocks: Block[] = []
    for (let i = 0; i < stream.length; i += 2) {
        let [len, pad] = [...stream.substring(i, i + 2)].map((val) => (val && Number.parseInt(val) || 0));
        blocks.push({ id: Math.floor(i / 2), padding: pad, size: len })
    }
    let disk = ""
    for (const element of blocks) {
        disk += element.id.toString().repeat(element.size) + ".".repeat(element.padding || 0) + "\n"

    }
    return disk;
}


let dat = `1234`.trim().replaceAll(/\r/g, "")
console.log(createDisk(dat))

debugger

//use this then reduce the value till you get zero