//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        if(input[i] === input[j]) {
          return input[i];
        }
      }
    }
    return undefined
  }
  
  function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
      if (map[input[i]] !== undefined) {
        return input[i]
      } else {
        map[input[i]] = i;
      }
    }
    return undefined
  }
  
  firstRecurringCharacter2([1,5,5,1,3,4,6])

  //same as firstRecurringCharacter2 but with neet syntax
  var firstRecurringCharacter3 = function(array){
    const map = {};
    for(let i = 0 ; i < array.length ; i++){
      if(map[array[i]] == undefined){
        map[array[i]] = i;
        continue;
      }
       return array[i];
    }
  return undefined;
  }
  
  firstRecurringCharacter3([1,1,2,5,4,2,1,3]);
