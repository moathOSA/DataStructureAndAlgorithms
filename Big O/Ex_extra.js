function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); //O(1)

    var middleIndex = Math.floor(items.length / 2); //O(n/2)
    var index = 0;

    while (index < middleIndex) { 
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) { //O(100) we don't loop for n time here
        console.log('hi');
    }


    //(1 + n/2 + 100) = O(n)
}