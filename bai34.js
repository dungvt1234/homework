function array_unique(array){
  array.sort();

  let max =[0,0];

  //Sử dụng vòng lặp for để lọc ra các phần tử xuất hiện nhiều hơn 1 lần
  //So sánh số lần xuất hiện và thay đổi max khi cần.
  let count =1;
  for (let i = array.length-1; i > 0; --i) {
      if (array[i] == array[i-1]) ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
      else{
           //So sánh số lần xuất hiện với max[1] 
           if (max[1] < count){ 
                //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
                //Và gán số lần xuất hiện vào max[1]
                max[0] = array[i];
                max[1] = count;  
                max[2] =array[i]
           }
           count = 1;
      }
  }
  console.log( "Phần tử "+max[0]+" xuất hiện nhiều nhất với "+max[1]+" lần");
}


let array = [ 7, 2, 2, 6, 7, 4, 9, 8 ];


//Tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript
array_unique(array);
