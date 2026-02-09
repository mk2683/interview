// Sum of n numbers, parametrised recursion
// Time complexity - O(N)  Space complexity - O(N) [since n function would be waiting to be executed on the stack]

function totalSum(n, sum=0) {
    if (n < 1) return sum;

    return totalSum(n-1, sum+n);
}

console.log(totalSum(900, 0)); // 405450


function totalSum(n) {
  if (n === 0) return 0;
  return n + totalSum(n - 1);
}

console.log(totalSum(900)); // 405450

function fact(n) {
  if (n === 1) return 1;

  return n * fact(n - 1);
}

console.log(fact(5)); // 120

// Reverse an array using recursion

function reverse(i, arr, n){
  if (i >= n/2) return arr;

  [arr[i], arr[n-i-1]] = [arr[n-i-1], arr[i]];
  return reverse(i+1, arr, n);
}

console.log(reverse(0, [1,2,3,4], 4)); // [ 4, 3, 2, 1 ]


// check if a string is a pallindrome or not using recursion

function pallindrome(i, str, n){
  if (i >= n/2) return true;
  if (str[i] != str[n-i-1]) return false;

  return pallindrome(i+1, str, n);
}

console.log(pallindrome(0, "mcdam", 5)); // [ 4, 3, 2, 1 ]

// fibonaci using recursion (Time comlexity - 2^n)

function fibonaci(n) {
  if (n <= 1) return n;
  return fibonaci(n-1) + fibonaci(n-2); 
}

console.log(fibonaci(6)); // 8

