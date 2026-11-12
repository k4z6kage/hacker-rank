function plusMinus(arr) {
    let positiveCount = 0; // 0, 1, 0, 0, 1, 1 = 3
    let negativeCount = 0; // 1, 0, 1, 0, 0, 0 = 2
    let zeroCount = 0; // 0, 0, 0, 1, 0, 0 = 1
    const n = arr.length; // 6
    
    for (let i = 0; i < n; i++) { // 0, 1, 2, 3, 4, 5
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    let result=[
        (positiveCount / n).toFixed(6),
        (negativeCount / n).toFixed(6),
        (zeroCount / n).toFixed(6)
    ];

    return result.join('\n');
}

let result = plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);

console.log(result); // Output: 0.500000 0.333333 0.166667