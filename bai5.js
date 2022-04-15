
//TÍnh tổng mảng [1,2,3,4] với dkien: nếu giá trị là số chẵn thì x2

const numbers = [1, 2, 3, 4,];
//const sumArrayNumber = numbers.reduce(function(a, b) {
//if(b % 2==0){
// return a + b*2
//}
  //  return a+b
//});
//console.log(sumArrayNumber)
function sumNumber(arr){
    const num = arr.reduce((a,b) =>{
    if(b % 2 ==0){
        return a + b*2
    }
    return a + b
    });
    return num
}
console.log(sumNumber(numbers))