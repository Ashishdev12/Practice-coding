//bbbab - org
// babbb - reverse

const longestPalindromeSubseq = (str) => {
    let original = str;
    let reverse = str.split('').reverse().join('');
    let temp = [];

    for(let i =0; i<=original.length; i++){
        temp.push(new Array(reverse.length+1).fill(0))
        console.log(temp);
    }

    for(let i = 1; i<temp.length; i++){
        for(let j = 1; j<temp[0].length; j++){
            if(original[i -1] === reverse[j-1]){
                temp[i][j] = temp[i-1][j-1] + 1;
                
            } 
            else {
                temp[i][j] = Math.max(temp[i-1][j], temp[i][j-1])
             
            }
        }
    }

    return temp[original.length][reverse.length];

}

// console.log(longestPalindromeSubseq('bbbab'));
// console.log(longestPalindromeSubseq('abcd'));
console.log(longestPalindromeSubseq('abcabcbb'));


//   b b b a b (reverse)
// b 0 0 0 0 0 0
// b 0 0 0 0 0 0
// b 0 0 0 0 0 0
// a 0 0 0 0 0 0
// b 0 0 0 0 0 0
// (original)