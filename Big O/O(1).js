const {performance} = require('perf_hooks');

const boxes = [0,1,2,3,4,5,6,7,8,9];

function findTheBox(array){
    let start =  performance.now();
    let myBox = boxes[9];
    console.log('hey we found the box number '+myBox+'');
    let end =  performance.now();
    let time = end - start;
    console.log('we have found the box in ' + time + ' milliSeconds');
}


// findNemo Big O is O(1) cuz we access the array directly using the index of the wanted element without go through all the elements in the array

findTheBox(boxes);