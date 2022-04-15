const animals = [
  {
    name: "cat",
    size: "small",
    weight: 5
  },
  {
    name: "dog",
    size: "medium",
    weight: 10.

  },
  {
    name: "elephant",
    size: "big",
    weight: 5000
  }
]
  
//output: (mảng các con vật có chữ t trong name)          
function findNameHasLetterT(arr){
  const consoleAnimals = arr.filter((x) =>{
    return x.name.includes('t')
  });
return consoleAnimals
}
//console.log(findNameHasLetterT(animals))

function showNewArray(Arr){
  return Arr.map((item) => findNameHasLetterT(animals));
}
console.log(showNewArray(findNameHasLetterT(animals)))