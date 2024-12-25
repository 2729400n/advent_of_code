import receieve from "../../utils/recieve_submit.mjs";

function calcArthSum(a, b) {
    let n = b, k = a - 1
    return (((n * (n + 1)) - (k * (k + 1))) / 2)
}

function createDisk(stream = "") {
    let blocks = [{
        id: 0,
        padding: 0,
        size: 0,
        startIndex: 0,
        paddingStart: 0
    }];
    let index = 0;
    let Bulk=0;
    for (let i = 0; i < stream.length; i += 2) {
        let [len, pad] = [stream[i], stream[i + 1]].map((val) => (val && Number.parseInt(val) || 0));
        pad = pad || 0;
        blocks.push({ id: Math.floor(i / 2), padding: pad, size: len, startIndex: index, paddingStart: index + len });
        index += pad + len;
    }
    Bulk=index
    let disk = "";
    for (const element of blocks) {
        disk += element.id.toString().repeat(element.size) + ".".repeat(element.padding || 0) + "\n";
    }

    // console.warn(`${"#".repeat(10)}\n${disk}\n${"#".repeat(10)}`)
    let elemStart = 0;
    let count = 0;
    let n = 0, k = 0;
    for (let fowardIndex, backIndex = 1; backIndex < blocks.length; backIndex++) {

        const backElem = blocks[blocks.length - backIndex];
        if (backElem.size == 0) {
            continue;
        }
        n = backElem.startIndex + backElem.size - 1;
        k = backElem.startIndex - 1;
        for (fowardIndex = 0; fowardIndex < blocks.length; fowardIndex++) {
            const fowardElem = blocks[fowardIndex];
            if(backElem.id==fowardElem.id){
                break;
            }
            // if the currElem has a bigger size than gap then we shall fill gap with gap size
            // else fill with current elem size  
            if (((fowardElem.padding || 0) >= backElem.size)) {
                const backBackelem =blocks[blocks.length - backIndex-1];
                let size = backElem.size;
                backElem.startIndex = fowardElem.paddingStart;
                backElem.paddingStart = backElem.startIndex + backElem.size;
                backBackelem.padding+=backElem.size+backElem.padding;
                backElem.padding=0;
                // update sizes to reflect changes
                fowardElem.padding = (fowardElem.padding || 0) - size;
                n = backElem.startIndex + size - 1;
                k = backElem.startIndex - 1;
                fowardElem.paddingStart += size;
                break;
            }

            // debugger
        }
        console.log(`${backElem.id}*{${k + 1} ... ${n}}`);
        count += (((n * (n + 1)) - (k * (k + 1))) / 2) * backElem.id;
        elemStart = fowardIndex;
    }
    
    blocks.sort((a, b) => (a.startIndex - b.startIndex))
    let diskArr = new Array(index)
    for (const element of blocks) {
        for (let i = 0; i < element.size; i++) {
            diskArr[element.startIndex+i]=element.id;
            
        }
        for (let i = 0; i < element.padding; i++) {
            diskArr[element.paddingStart+i]=".";
            
        }
    }
    console.log(diskArr.join(""))
    // console.warn(`${"#".repeat(10)}\n${disk}\n${"#".repeat(10)}`)
    return count;
}

let dat = (`2333133121414131402`).replaceAll(/\D/g, "");
console.log(dat.substring(dat.length-7,dat.length))
console.log(createDisk(dat));

