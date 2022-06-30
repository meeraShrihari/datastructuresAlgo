/**
 * https://www.youtube.com/watch?v=L6cffskouPQ&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=11
 * @param {*} str 
 * @returns 
 */

function longestSubstrWithNoRepeatChar(str) {
    let i=0;
    let j=0;
    let map = {};
    let max = 0;
    while(j < str.length) { //4<13 abcdd
        map[str[j]] = (map[str[j]] || 0) ? map[str[j]] + 1 : 1; //{d:1}
        if(Object.keys(map).length < j-i+1) { //4!=5
            while(Object.keys(map).length < j-i+1) {
                map[str[i]]--;
                if(map[str[i]] === 0) {
                    delete map[str[i]];
                }
                i++;
            }
            j++;
        } else if(j-i+1 === Object.keys(map).length) {
            max = Math.max(max, Object.keys(map).length);//4
            j++;
        }

    }
    return max;
}

console.log(longestSubstrWithNoRepeatChar('abcddaabbcdea'));
console.log(longestSubstrWithNoRepeatChar('aabbcdeaabcdefhhaa'));