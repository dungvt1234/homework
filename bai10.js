const array = [1, 2, 3, 4, 1, 2 ]
function count_element_in_array(array, x){
    let count = 0;
    for(let i=0;i<array.length;i++){
      if(array[i]==x) 
        count ++;
    }
    console.log( "Phan tu " +  x  + " xuat hien " + count +  " lan");
}
let arrayWithNoDuplicates = array.reduce(function (accumulator, element) {
    if (accumulator.indexOf(element) === -1) {
      accumulator.push(element)
    }
    return accumulator
  }, [])

  for (let i = 0; i < arrayWithNoDuplicates.length; i++) 
    count_element_in_array(array, arrayWithNoDuplicates[i]);
