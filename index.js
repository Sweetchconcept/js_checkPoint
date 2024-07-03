// String Manipulation Functions
// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 

// Count a character
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("hello")); 

// Capitalize word
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("hello world")); 

// Array functions
// Finding minimum and maximum

function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

console.log(findMaximum([1, 2, 3, 4, 5])); 
console.log(findMinimum([1, 2, 3, 4, 5])); 

// Sum of array

function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}


console.log(sumOfArray([1, 2, 3, 4, 5])); 

// Filter Array
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}

console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 !== 0)); 

// Mathematics Functions
// Factorial

function factorial(n) {
    if (n < 0) return -1; 
    if (n === 0) return 1; 
    return n * factorial(n - 1);
}

console.log(factorial(5)); 

// Prime number check

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

console.log(isPrime(11)); 
console.log(isPrime(4));  

// Fibonacci Sequence

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq;
}

console.log(fibonacci(10)); 


