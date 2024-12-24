"use strict";
function createDisk(stream) {
    let blocks = [];
    let index = 0
    for (let i = 0; i < stream.length; i += 2) {
        let [len, pad] = [...stream.substring(i, i + 2).split("")].map((val) => (val && Number.parseInt(val) || 0));
        blocks.push({ id: Math.floor(i / 2), padding: pad, size: len, startIndex:index});
        index+=len+pad
    }
    let disk = "";
    for (const element of blocks) {
        disk += element.id.toString().repeat(element.size) + ".".repeat(element.padding || 0) + "\n";
    }
    let elemStart = 0;
    let count = 0;
    debugger
    for (let fowardIndex, backIndex = 1; backIndex <= blocks.length; backIndex++) {
        const backElem = blocks[blocks.length - backIndex];
        for (fowardIndex = elemStart; fowardIndex < blocks.length; fowardIndex++) {
            const fowardElem = blocks[fowardIndex];
            let n = fowardElem.startIndex + fowardElem.size - 1, k = fowardElem.startIndex - 1;
            debugger
            count += (((n * (n + 1)) - (k * (k + 1))) / 2) * fowardElem.id;
            // if we have exhausted our all of gaps
            // we no longer need to do anything
            if (fowardElem.id == backElem.id) {
                break;
            }
            // if the currElem has a bigger size than gap then we shall fill gap with gap size
            // else fill with current elem size  
            let size = Math.min((fowardElem.padding || 0), backElem.size);
            backElem.size -= size;
            fowardElem.padding = (fowardElem.padding || 0) - size;
            n += size;
            k += size;
            debugger
            count += (((n * (n + 1)) - (k * (k + 1))) / 2) * fowardElem.id;
            if (fowardElem.padding == 0) {
                elemStart;
            }
            // ending clasues for wether or 
            if (backElem.size == 0) {
                break;
            }
        }
        elemStart = fowardIndex;
    }
    debugger
    return count;
}
let dat = `1234`.trim().replaceAll(/\r/g, "");
console.log(createDisk(dat));
debugger;
//use this then reduce the value till you get zero
//