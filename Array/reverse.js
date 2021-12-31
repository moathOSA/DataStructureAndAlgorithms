const sentence = "hey my name is moath, what's your name ?";
function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    for(let i = str.length - 1; i >= 0; i--){
      backwards.push(str[i]);
    }
    // console.log(backwards.join(''));
    return backwards.join('');
  }
  
  function reverse2(str){
    // console.log(str.split('').reverse().join(''));
    return str.split('').reverse().join('');
  }
  
//const reverse3 = str => console.log([...str].reverse().join(''));
const reverse3 = str => [...str].reverse().join('');

  
  reverse(sentence)
  reverse2(sentence)
  reverse3(sentence)