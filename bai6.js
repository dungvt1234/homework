const numbers= [1, 2, 3 , 4];

function showSumNumber (arr){
const a = arr.reduce((x,y)=> {
 if(y % 2 == 0){
     return x + y/2
 }
 return x+y*2
},0);
return a
}
console.log(showSumNumber(numbers))