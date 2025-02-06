



let demo = {
    a: {
        b: {
            c: '1234',
            d: [1, [1, 3], {
                c: 2
            }]
        }
    }
}


let arrClone = (arr) => {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            ans[i] = arrClone(arr[i])
        } else if (typeof arr[i] === 'object') {
            ans[i] = deepClone(arr[i])
        } else {
            ans[i] = arr[i]
        }
    }
    return ans
}

let deepClone = (object) => {

    let obj = {}
    for (const key in object) {
        if (Array.isArray(object[key])) {
            obj[key+'a'] = arrClone(object[key])
        } else if (typeof object[key] === 'object') {
            obj[key+'a'] = deepClone(object[key])
        } else {
            obj[key+'a'] = object[key]
        }
    }
    return obj
}

let ans = deepClone(demo)

console.log(JSON.stringify(ans));
