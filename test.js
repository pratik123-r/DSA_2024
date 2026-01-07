// let obj = {
//     name: {
//         name: {
//             asdf: 'ftadc',
//             hjfke: {
//                 adfgg: 'dd',
//                 dded: 'df'
//             }
//         },
//         asdgh: {
//             asdf: 'pratik',
//             hjfke: {
//                 adfgg: 'raj',
//                 dded: [{ name: 'sh' }, [1, 2, 3, { nk: 2 }]]
//             }
//         },
//         testArray: [1, 2, 3]
//     }
// }

// const path = 'name>asdgh>hjfke>dded>1>3>nk';

// function getDataRecursive(obj, path) {
//     if (path.length === 0) {
//         return obj;
//     }
//     let currentPath;
//     if (typeof path === "string") {
//         currentPath = path.split(">")
//     }
//     else {
//         currentPath = path;
//     }
//     const key = currentPath[0];
//     if (obj.hasOwnProperty(key)) {
//          return getDataRecursive(obj[key], currentPath.splice(1));
//     }
//     return undefined;
// }

// function getData(obj, path) {
//     const pathArray = path.split(">");
//     let curroObj = obj;
//     for (let index = 0; index < pathArray.length; index += 1) {
//         const currentKey = pathArray[index];
//         if (curroObj.hasOwnProperty(currentKey)) {
//             curroObj = curroObj[currentKey];
//         }
//     }
//     return curroObj
// }

// console.log(getDataRecursive(obj, path));

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

// class ShortUrl {
//     counter = 8977887
//     shortIdToUrlMapping = {}
//     urlToShortIdMapping = {}

//     constructor() {}

//     getCounter() {
//         return ++this.counter;
//     }

//     generateShortId() {
//         let count = this.getCounter()
//         let ans = ''
//         while (count) {
//             let mod = count % 62;
//             if(mod <= 9)
//                 ans += String.fromCharCode(mod+48)
//             else if(mod >= 10 && mod <= 35)
//                 ans += String.fromCharCode(mod+55)
//             else
//                 ans += String.fromCharCode(mod+61)

//                 count = Math.floor(count/62)
//         }
//         return ans
//     }

//     generateShortUrl(longUrl) {
//         if(this.urlToShortIdMapping[longUrl])
//                 return this.urlToShortIdMapping[longUrl]
//         else {
//             const shortID = this.generateShortId()
//             this.shortIdToUrlMapping[shortID] = longUrl;
//             this.urlToShortIdMapping[longUrl] = shortID;
//             return shortID
//         }
//     }

//     getOriginalUrl(shortID) {
//         return this.shortIdToUrlMapping[shortID]
//     }

// }

// let shortUrl = new ShortUrl()
// shortUrl.generateShortUrl("https://www.w3schools.com/react/react_useref.asp1")
// shortUrl.generateShortUrl("https://www.w3schools.com/react/react_useref.asp2")
// shortUrl.generateShortUrl("https://www.w3schools.com/react/react_useref.asp3")
// shortUrl.generateShortUrl("https://www.w3schools.com/react/react_useref.asp4")
// console.log(shortUrl.shortIdToUrlMapping, shortUrl.getOriginalUrl("hYfb"));

// var minZeroArray = function (nums, queries) {
//    let ans = 0;
//    for (let i = 0; i < nums.length; i++) {
//       let flag = false;
//       for (let j = 0; j < queries.length; j++) {
//          if (queries[j][0] <= queries[j][2] && queries[j][1] >= queries[j][2] && nums[i]) {
//             flag = true
//             nums[i] -= Math.min(nums[i], queries[j][2])
//          }
//       }
//       if (flag)
//          ans++
//       }

//    for (let i = 0; i < nums.length; i++) {
//       if (nums[i] != 0)
//          return -1;
//    }
//    return ans
// };

// minZeroArray([2, 0, 2], [[0, 2, 1], [0, 2, 1], [1, 1, 3]])

