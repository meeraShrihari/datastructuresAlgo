/**
 * https://www.youtube.com/watch?v=MW4lJ8Y0xXk&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=5
 * @param {*} str1  
 * @param {*} str2 
 * @returns 
 */

function occurrenceOfAnagramPresent(str1, str2) {
    if(str1.length < str2.length) return false;
    let i=0;
    let j=0;
    let mapStr2 = {};
    let letter = '';
    for(let l of str2) {
        mapStr2[l] = (mapStr2[l] || 0) ? mapStr2[l] + 1 : 1;  // {a:3, b:1}
    }
    let countOfDistinctLetters = Object.keys(mapStr2).length;
    while(j < str1.length) { //4<8
        //Calculation
        letter = str1[j]; //a
        if(mapStr2[letter] && mapStr2[letter] > 0) {
            mapStr2[letter] = mapStr2[letter] - 1; // {a:0, b:0}
            if(mapStr2[letter] === 0) {
                countOfDistinctLetters--;
            }
        }
        if(j-i+1 < str2.length) {2<4
            j++; //4
        } else if(j-i+1 === str2.length) {
            //Getting answer from above calculation
            if(countOfDistinctLetters === 0) return true;
            //calculate for str1[i] before sliding
            mapStr2[str1[i]]++;
            countOfDistinctLetters++;
            //Sliding the window
            i++; j++;
        }
    }
    return false;
}

console.log(occurrenceOfAnagramPresent('aabaabaa', 'aaba'));
console.log(occurrenceOfAnagramPresent('adctor', 'cat'));