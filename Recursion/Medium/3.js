/**
 * Generate all binary strings without consecutive 1’s
 * 
    Input : K = 3  
    Output : 000 , 001 , 010 , 100 , 101 

    Input : K  = 4 
    Output :0000 0001 0010 0100 0101 1000 1001 1010
 */


function util(str, K, ans) {
    if(str.length==K) {
        ans.push(str)
        return;
    }
    if(str[str.length-1] === '1'){
        util(str+'0', K, ans)
    }
    if(str[str.length-1] === '0'){
        util(str+'0', K, ans)
        util(str+'1', K, ans)
    }

}

function generateAllStrings(K) {
    if(K<=0)
        return;

    let ans = [];
    util('0', K, ans)
    util('1', K, ans)
    console.log(ans);
}

generateAllStrings(4)