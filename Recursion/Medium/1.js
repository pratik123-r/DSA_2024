/**
 * Power Set: Print all the possible subsequences of the String
 */


const subsequences = (str, index, ans, subSets) => {
    if(index === str.length) {
        if(ans.length)
        subSets.push(ans)
        return
    }

    subsequences(str, index+1, ans, subSets)
    subsequences(str, index+1, ans+str[index], subSets)
}


let subSets = []
let ans = subsequences("abc", 0, '', subSets)

console.log(subSets);