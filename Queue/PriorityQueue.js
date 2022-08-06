//we will implement priority queue using array
//each element in array will be an array like this let array = [['a',1],['b',4],['c',7]] 
//the array[0][0] will be the element val and array[0][1] will be the priority.

//first list implement a normal queue using array


//normal queue
// let queue = [];

// let enqueue = function(elem){
//     queue.push(elem);
// }

// let dequeue = function(){
//     if(queue.length == 0){
//         console.log('sorry bro you can\'t');
//         return;
//     }
//     queue.shift();
// }

// enqueue(5);
// enqueue(4);
// enqueue(3);
// enqueue(7);
// enqueue(9);

// console.log(queue);



//normal priority queue
let queue = [];

let enqueue = function(elem){
    //we have to check if on priority and if the queue is empty
    if(queue.length == 0 || elem[1] >= queue[queue.length-1][1]){
        queue.push(elem);
        return;
    }

    for(let i=0; i < queue.length; i++){
        if(elem[1] < queue[i][1]){
            queue.splice(i, 0, elem);
            return;
        }
    };

}

let dequeue = function(){
    if(queue.length == 0){
        console.log('sorry bro you can\'t');
        return;
    }
    queue.shift();
}

enqueue(['a', 9]);
enqueue(['q', 1]);
enqueue(['z', 5]);
enqueue(['p', 6]);
enqueue(['g', 2]);

console.log(queue);
