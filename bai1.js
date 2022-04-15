 a = [1,2,3,4] ; Output: [1,4,3,8] 
const numbers= [1, 2, 3, 4];

function showNewArrayNumber(arr){
    const a = arr.map((item)=> {
        if(item % 2 == 0){
            return item * 2
        }else{
            return item
        }
    });
    return a;
}
  console.log(showNewArrayNumber(numbers))