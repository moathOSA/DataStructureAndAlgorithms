const boxes = [1,2,3,4,5,6];



function logPairs(array) {
    for(let a = 0 ; a < array.length ; a++){
        for(let b = 0; b < array.length; b++ ){
            console.log(array[a],array[b])
        }
    }
}

logPairs(boxes);

//Big O here is O(n*n) = O(n^2) cuz we have nested loop




function triky(a , b){
    a.forEach(function(){
        b.forEach(function(){
            console.log('hey');
        })    
    })
}

//Big O here is O(n * m) cuz we have nested loop wih diff inputs
