function numberOfAnagrams(str, pat) {
    const map = {}
    for(let i=0; i<pat.length; i++) {
        map[pat[i]] = map[pat[i]] ? map[pat[i]] + 1 : 1; 
    }
    let j=0;
    let i=0;
    let count=0;
    let patCount = 0;
    while(j < str.length) {
        console.log(str[j]);
        if(map[str[j]] > 0) {
            map[str[j]]--;
            count++;
        }
        if(j-i+1 < pat.length) {
            j++;
        } else {
            if(count === pat.length) {
                patCount++;
                //count = 0;
            }
            if(map[str[i]] >= 0 && str[i] !== str[i+1]) {
                map[str[i]]++;
                count--;
            }
            i++;
            j++;
        }
    }
    return patCount;
}

console.log(numberOfAnagrams('cafftacaactacctakkktcajkhk', 'cat'));