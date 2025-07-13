const add = createAdd(5)
add(6)//11
add(9)//20
add(5)//25

function createAdd(a){
    return function(b){
        return a + b;
    }
}

// var result;

// function createAdd(add){
//     result += add;
//     return result;
// }
// createAdd(5);
// createAdd(6);
// createAdd(9);
// createAdd(5);


var arr = [1,2,3,4,5,6,0, 1,2,3,.....n];
//
function mapFun(arr){
    let newArray = arr.map(function(element, index, array){
        array.push(index);
        if(index % 2 === 0)
            return element *2;

        else
            return element * 4;
    })
    return newArray;
}

mapFun(arr);

getDerivedStateFromProps(state,props);
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

var myPromise = new Promise(function(resolve, reject){
    var count =0;
    fetch1.then(function(res){
        count += 1;
        if (count >= 2) {
           resolve();
        }
    })
    fetch2.then(function(res){
        count += 1;
        if (count >= 2) {
           resolve();
        }
    })
    fetch3.then(function(res){
        count += 1;
        if (count >= 2) {
           resolve();
        }
    })
})