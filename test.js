let obj = {
    name: {
        name: {
            asdf: 'ftadc',
            hjfke: {
                adfgg: 'dd',
                dded: 'df'
            }
        },
        asdgh: {
            asdf: 'pratik',
            hjfke: {
                adfgg: 'raj',
                dded: [{ name: 'sh' }, [1, 2, 3, { nk: 2 }]]
            }
        },
        testArray: [1, 2, 3]
    }
}

const path = 'name>asdgh>hjfke>dded>1>3>nk';

function getDataRecursive(obj, path) {
    if (path.length === 0) {
        return obj;
    }
    let currentPath;
    if (typeof path === "string") {
        currentPath = path.split(">")
    }
    else {
        currentPath = path;
    }
    const key = currentPath[0];
    if (obj.hasOwnProperty(key)) {
         return getDataRecursive(obj[key], currentPath.splice(1));
    }
    return undefined;
}

function getData(obj, path) {
    const pathArray = path.split(">");
    let curroObj = obj;
    for (let index = 0; index < pathArray.length; index += 1) {
        const currentKey = pathArray[index];
        if (curroObj.hasOwnProperty(currentKey)) {
            curroObj = curroObj[currentKey];
        }
    }
    return curroObj
} 

console.log(getDataRecursive(obj, path));






// let close = (obj, path) => {
//     path = path.split('.')
//     let count = -1
//     let solve = (obj) => {
//         if (!obj) return 'Invaild Path';
//         count++
//         if (count == path.length) {
//             return obj
//         }
//         if (typeof obj[path[count]] === 'object') {
//             return solve(obj[path[count]])
//         }
//         else {
//             return obj[path[count]]
//         }

//     }


//     return solve(obj)

// }





// console.log(close(obj, 'name.asdgh.hjfke.dded.1.3'));
