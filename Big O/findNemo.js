const names = ['moath', 'omar', 'ahmed', 'khaled', 'hasan', 'nemo', 'zezo', 'jaber'];

function findNemo(array){
    let start = process.uptime();
    for(let i= 0; i < array.length; i++){
        if (array[i] == 'nemo'){
            console.log('hey we found nemo !!')
        }
    }
    let end = process.uptime();
    let time = end - start;
    console.log('we have found nemo in ' + time + ' microSeconds');
}


findNemo(names);