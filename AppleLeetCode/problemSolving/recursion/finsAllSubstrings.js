function findAllSubstrings(str, res=[]) {
    if(str.length === 1) return str;
    res.push(str);
    findAllSubstrings(str.substring(0,1), res);
    findAllSubstrings(str.substring(1,str.length), res);
    return res;
}

console.log(findAllSubstrings('abc')); //[a,b,ab,bc,ac,abc]