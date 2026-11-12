function staircase(n) {
    // Write your code here
    for(let i =1; i<=n ; i++){
        console.log(' '.repeat(n - i) + '#'.repeat(i) + '#'.repeat(i) + ' '.repeat(i));
    }

}

let result = staircase(4);
console.log(result)