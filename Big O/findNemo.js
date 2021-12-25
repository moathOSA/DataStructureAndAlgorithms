const {performance} = require('perf_hooks');

const names = ['moath', 'omar', 'ahmed', 'khaled', 'hasan', 'nemo', 'zezo', 'jaber'];

function findNemo(array){
    let start =  performance.now();
    for(let i= 0; i < array.length; i++){
        if (array[i] == 'nemo'){
            console.log('hey we found nemo !!')
        }
    }
    let end =  performance.now();
    let time = end - start;
    console.log('we have found nemo in ' + time + ' milliSeconds');
}


findNemo(names);