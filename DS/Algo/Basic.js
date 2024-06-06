/////////////////// Fibonaci using recursion ///////////////////

function fibonacci(n){
    var result;
    if (n == 1) {
        return 0;
    } else if(n == 2){
        return 1;
    }

   result =  fibonacci(n-1) + fibonacci(n-2);

   return result;
}


/////////////////// Increment By one method ///////////////////
function incrementByOne(){
    var a = 0
    function modifyIncrementByOne(){
        a++;
        console.log(a);
    }
    return modifyIncrementByOne;
}

var modifier  = incrementByOne();

modifier();
modifier();

/////////////////// Find Second Largest ///////////////////
function seconglargest(arr){
    let max = arr[0];
    let second = -99999;
    for (let index = 0; index < arr.length-1; index++) {
        if (arr[index] > max) {
            second = max;
            max = arr[index];

        } else if(arr[index] > second){
            second = arr[index];
        }
    }
    return second;
}

seconglargest([1, 8, 9, 1, 10, 8, 9, -12]); // 9 is the result

/////////////////// Anagram ///////////////////
function Anagram(str1, str2){
    str1 = sort(str1);
    str2 = sort(str2);
    if (str1 == str2) {
        return true;
    } else {
        return false;
    }
}

Anagram("silent", "listen");
