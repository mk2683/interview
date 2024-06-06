

// for (var i1 = 1; i1 <= 2; i1++) {
//     let a2;
//     function setTimeoutFunc(){
//         a2 = setTimeout(function () {
//             alert(i1);
//           }, 100);
//     }
//     setTimeoutFunc();
//     console.log(a2);
//   }
//   console.log(i1);


// console.log(a);//und
// var a =0;

// function abc(){
//     console.log("abc");
// }
// abc();

// console.log("abc");

// abc(); 

// ( function abc() { console.log(“abc”)} )();


// add(1,2) and add(1)(2)

// function add(a, b){
//     let sum = a;
//     if (b) {
//        return sum + b; 
//     }
//     return function(x){
//         sum += x;
//         return sum;
//     }
// }

// let input = [1,2,2,3,3,3,3];

// function maxOccurence(arr){
//     let maxOccurenceNumber = 0, count =1;

//     arr.sort(function(a, b){
//         return a - b;
//     })

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i-1]){
//             count++;
//         } else {
//             if (count > maxOccurenceNumber) {
//                 maxOccurenceNumber = count;
//             }
//             count = 1;
//         }   
//     }
//     return (count > maxOccurenceNumber)? count : maxOccurenceNumber;
// }

// maxOccurence(input);

// Array.prototype.myMap = function(callback){
//     let resultArr = [];

//     this.forEach(element => {
//         resultArr.push(callback(element))
//     });

//     return resultArr;
// }

// [1,2,3].map((element) => {
//     return element*element;
// })


Array.prototype.myMap = function(callback){
    let resultArr = [];
  
    this.forEach(element => {
        resultArr.push(callback(element))
    });
  
    console.log(resultArr);
    
  }
  
  var abc = [1,2,3];
  abc.myMap((element) => {
    return element*element;
  })
  
  node -> left 
  node -> right 
      1
    2   3
  4   5   6
  
  // 452631
  
  