function timeStart(callback){
  setTimeout(function(){
    console.log('bat dau an luc 19h')
  callback()
  },0);
}
 function planA(){
   setTimeout(function(){
    console.log('an co xong luc 20h')
   },1000)
 }   

function goToTheMovie(planA){
  setTimeout(function(){
    planA()
  },2000)
}
function planB(){
  console.log('xem film xong luc 22h')
}

function walkingAround(planB){
  setTimeout(function(){
    planB()
  },3000)
}
function planC(){
  console.log('di dao xong luc 23h')
}
timeStart(planA)
goToTheMovie(planB)
walkingAround(planC)