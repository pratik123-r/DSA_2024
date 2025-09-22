
const arr = [
  ["lion", "cat"],
  ["cat", "mammal"],
  ["dog", "mammal"],
  ["mammal", "animal"],
  ["fish", "animal"],
  ["shark", "fish"],
];

//op
// [
//   "animal -> mammal -> cat -> lion",
//   "animal -> mammal -> cat",
//   "animal -> mammal -> dog",
//   "animal -> mammal",
//   "animal -> fish",
//   "animal -> fish -> shark"
// ]


function objectMapping(arr) {
    return arr.reduce((prev, curr)=>{
        const [child, parent] = curr
        prev[child] = parent
        return prev
    }, {})
}



function parentToChild(obj, key) {
    let ans = key
    while(obj[key]) {
        ans = obj[key] + ' -> ' + ans
        key = obj[key]
    }
    return ans
}

function getRelation() {
    let obj = objectMapping(arr)
    let ans = []
    Object.entries(obj).forEach((key)=>{
        ans.push(parentToChild(obj, key[0]))
    })
    console.log(ans);
    
}

getRelation()

