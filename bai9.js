const arr = [1,2,3,1,2,1,1];
function findNumberMostFrequent(arr) {
    let a = 1;
    let b = 0;
    let item;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++)
        if (arr[i] === arr[j]) {
          b++;
          if(b>a){
           a = b
            item = arr[i];
          }
        }
        b=0
      }
      return item
  }
   
  console.log(findNumberMostFrequent(arr))