// Làm chuỗi hành động của Thỏ với các hoạt động sau bằng 2 cách (callback và Promise)



 const gioBatDauDi = 19
// con_tho_an_co: ( cộng 1 tiếng - timeout: 1s) => con_tho_di_xem_phim: ( cộng 2 tiếng - timeout: 2s) => con_tho_di_dao: ( cộng 1 tiếng - timeout: 1s) => OUTPUT:
// Con thỏ ăn cỏ lúc: 19h
// Con thỏ ăn xong lúc: 20h
// con thỏ đi xem phim xong lúc 22h
// con thỏ đi dạo xong lúc: 23h
// Tổng cộng thơi gian đi chơi là 4 tiếng
// Thời gian code chạy 4s

// example
// con_tho_an_co(gioBatDauDi) => con_tho_di_xem_phim => con_tho_di_dao

function startPlan(){
  return new Promise((resolve,reject) =>{
    setTimeout(() =>{
    resolve('19h')
    },0)
  })
}
   function planA(){
     setTimeout(function(){
       console.log('con tho an xong luc 20h')
     },1000); 
   }
   function planB(){
    setTimeout(function(){
      console.log('con tho xem film toi 22h')
    },2000)
   }
   function planC(){
     setTimeout(function(){
       console.log('çon tho di dao xong luc 23h')
     },3000);
   }   
   startPlan()
   .then(startEat =>{
     console.log('bat dau an luc', startEat)
     planA(startEat) 
     planB(startEat)
     planC(startEat)
   })

