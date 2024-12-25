"use strict";
import recieve from "../../utils/recieve_submit.mjs";
function createDisk(stream) {
    let blocks = [];
    let index = 0;
    for (let i = 0; i < stream.length; i += 2) {
        let [len, pad] = [...stream.substring(i, i + 2).split("")].map((val) => (val && Number.parseInt(val) || 0));
        pad = pad || 0;
        blocks.push({ id: Math.floor(i / 2), padding: pad, size: len, startIndex: index, paddingStart: index + len });
        index += pad + len;
    }
    let disk = "";
    for (const element of blocks) {
        disk += element.id.toString().repeat(element.size) + ".".repeat(element.padding || 0) + "\n";
    }
    let elemStart = 0;
    let count = 0;
    for (let fowardIndex, backIndex = 1; backIndex <= blocks.length; backIndex++) {
        const backElem = blocks[blocks.length - backIndex];
        
        if (backIndex == elemStart && backElem.size == 0) {
            break;
        }
        if (backElem.size == 0) {
            continue;
        }
        for (fowardIndex = elemStart; fowardIndex < blocks.length; fowardIndex++) {
            const fowardElem = blocks[fowardIndex];
            // debugger
            let n = fowardElem.startIndex + fowardElem.size - 1, k = fowardElem.startIndex - 1;
            count += (((n * (n + 1)) - (k * (k + 1))) / 2) * fowardElem.id;
            
            fowardElem.size = 0;
            console.log(`${fowardElem.id}*{${k+1} ... ${n}}`);
            // if we have exhausted our all of gaps
            // we no longer need to do anything
            if (fowardElem.id == backElem.id) {
                break;
            }
            // if the currElem has a bigger size than gap then we shall fill gap with gap size
            // else fill with current elem size  
            let size = Math.min((fowardElem.padding || 0), backElem.size);
            // update sizes to reflect changes
            backElem.size -= size;
            fowardElem.padding = (fowardElem.padding || 0) - size;
            n = fowardElem.paddingStart + size - 1;
            k = fowardElem.paddingStart - 1;
            fowardElem.paddingStart += size;
            console.log(`${backElem.id}*{${k+1} ... ${n}}`);
            count += (((n * (n + 1)) - (k * (k + 1))) / 2) * backElem.id;
            
            // ending clasues for wether or 
            if (backElem.size == 0) {
                break;
            }
            // debugger
        }
        
        elemStart = fowardIndex;
    }
    return count;
}

    let dat = (await recieve(9)).replaceAll(/\D/g, "");
    console.log(dat)
    console.log(createDisk(dat));

