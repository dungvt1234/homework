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
//output: (mảng các con vật có weight > 50 k
//const filterAnimals = animals.filter(function(val,index,arr){
  //return val.weight > 50 
//})
//console.log(filterAnimals)

function filterAnimal(animal){
  const chooseAnimal = animal.filter((val) =>{
   return val.weight > 50
  }); 
    return chooseAnimal
}
console.log(filterAnimal(animals))