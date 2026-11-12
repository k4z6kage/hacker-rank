function diagonalDifference(arr) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    const n = arr.length; // 3

    for (let i = 0; i < n; i++) { // 0, 1, 2
        primaryDiagonal += arr[i][i];  // 1,5,9
        secondaryDiagonal += arr[i][n - 1 - i]; // 
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

let result = diagonalDifference([
    [1 ,2, 3],
    [4, 5, 6],
    [9, 8, 9]
]);

console.log(result); // Output: 2