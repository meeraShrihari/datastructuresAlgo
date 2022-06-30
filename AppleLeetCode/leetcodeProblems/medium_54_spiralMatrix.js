const spiralMatrix = (matrix) => {
    let [left, right, top, bottom] = [0, matrix[0].length-1, 0, matrix.length-1];
    let direction = 'right';
    const outputArr = [];

    while(left <= right && top <= bottom) {
        if(direction === 'right') {
            for(let i=left; i<=right; i++) {
                outputArr.push(matrix[top][i]);
            }
            top += 1;
            direction = 'down'
        }
        else if(direction === 'down') {
            for(let i=top; i<=bottom; i++) {
                outputArr.push(matrix[i][right]);
            }
            right -= 1;
            direction = 'left';
        }
        else if(direction === 'left') {        
            for(let i=right; i>=left; i--) {
                outputArr.push(matrix[bottom][i]);
            }
            bottom -= 1;
            direction = 'up';
        }
        else if(direction === 'up') {
            for(let i=bottom; i>= top; i--) {
                outputArr.push(matrix[i][left]);
            }
            left += 1;
            direction = 'right';
        }
    }
    return outputArr;
}

/*console.log(spiralMatrix(
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
))*/

console.log(spiralMatrix(
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12]
    ]
));
