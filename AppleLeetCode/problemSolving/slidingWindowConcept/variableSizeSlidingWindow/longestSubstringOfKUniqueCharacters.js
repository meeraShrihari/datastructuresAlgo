function longestSubstringOfKUniqueCharacters(str, k) {
    let i=0;
    let j=0;
    let longest = 0;
    let map = {};
    while(j < str.length) {//8<10 , bebe
        map[str[j]] = (map[str[j]] || 0) ? map[str[j]] + 1 : 1; //{b:3, c:1, e:3}
        if(Object.keys(map).length < k) {//4!<3
            j++;//4
        } else if(Object.keys(map).length === k) { //
            longest = Math.max(longest, j-i+1); //7
            j++;//11
        } else { //4 > 3
            while(Object.keys(map).length > k) { //3
                map[str[i]]--; //{a:0, b:1, c:1, e:1}
                if(map[str[i]] === 0) {
                    delete map[str[i]]; //{b:2, c:1, e:1}   
                }
                i++; //4
            }
            j++;
        }
    }
    return longest;
}

console.log(longestSubstringOfKUniqueCharacters('aabacbebebe', 2))