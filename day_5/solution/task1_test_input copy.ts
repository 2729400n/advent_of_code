"use strict";
{
interface Block {
    id: number;
    padding?: number;
    size: number;
    startIndex:number
    paddingStart:number
}

function createDisk(stream:string) {
    let blocks: Block[] = [];
    let index = 0;
    for (let i = 0; i < stream.length; i += 2) {
        let [len, pad] = [...stream.substring(i, i + 2).split("")].map((val) => (val && Number.parseInt(val) || 0));
        pad=pad||0
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
        if(backIndex==elemStart){
            break
        }
        if(backElem.size==0){
            continue
        }
        for (fowardIndex = elemStart; fowardIndex < blocks.length; fowardIndex++) {
            const fowardElem = blocks[fowardIndex];
            let n = fowardElem.startIndex + fowardElem.size - 1, k = fowardElem.startIndex - 1;
            count += (((n * (n + 1)) - (k * (k + 1))) / 2) * fowardElem.id;
            debugger
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
            n = fowardElem.paddingStart + size-1;
            k = fowardElem.paddingStart-1;
            fowardElem.paddingStart += size;
            
            console.log(`${backElem.id}*{${k+1} ... ${n}}`);
            
            count += (((n * (n + 1)) - (k * (k + 1))) / 2) * backElem.id;
            if (fowardElem.padding == 0) {
                elemStart;
            }
            // ending clasues for wether or 
            if (backElem.size == 0) {
                break;
            }
            debugger
        }
        debugger
        elemStart = fowardIndex;
    }
    return count;
}


{
let dat = `12345`.trim().replaceAll(/\r/g, "");
console.log(createDisk(dat));
}
//use this then reduce the value till you get zero
// 022111222
//60 =2*((2*(2+1)))/2 +1*((5*(5+1))-(2*(2+1)))/2+2*((8*(8+1))-(5*(5+1)))/2
// algorithim is sound for js
}