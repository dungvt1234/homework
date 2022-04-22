 const arr =[3, 2, 2, 3, 4, 1, 2]
/*function dup(arrr) {
    let max = { item: 0, count: 0 };
    for (let i = 0; i < arrr.length; i++) {
        let arrOccurences = arrr.filter(item => 
			{ return item === arrr[i] }).length;
        if (arrOccurences > max.count) {
            max = { item: arrr[i], count: arrr.filter(item => {
				 return item === arrr[i] }).length };
        }
    }
    return max.item;
}
console.log(dup(arr));*/

function findNumber(arrr){
    let a= 0
    let b =0
    for(let i = 0; arrr.length; i++){
        let arrOcurent = arrr.filter(a => {
       return (a===arrr[i]).length
        })
        
        return arrr[i]
    }
}
console.log(findNumber(arr))
