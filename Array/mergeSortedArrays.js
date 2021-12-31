function mergeSortedArrays(array1, array2){

    if(isEmptyArrays(array1,array2)){
        //console.log("Ooch, your arrays are empty !");
       return "Ooch, your arrays are empty !";
    };
    
    
    if(array1.length === 0) {
        return array2;
    }

    if(array2.length === 0) {
        return array1;
    }

    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
      

    while (array1Item || array2Item){
        if(array2Item === undefined || array1Item < array2Item){
          mergedArray.push(array1Item);
          array1Item = array1[i];
          i++;
        }   
        else {
          mergedArray.push(array2Item);
          array2Item = array2[j];
          j++;
        }
       }
       console.log(mergedArray);
       return mergedArray;
  }

  function isEmptyArrays(array1,array2) {
        //console.log((array1.length === 0 && array2.length === 0);
        return (array1.length === 0 && array2.length === 0);
}
  
  mergeSortedArrays([0,3,4,31], [3,4,6,30]);
