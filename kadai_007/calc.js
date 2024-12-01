let num = 15;

//3の倍数かつ5の倍数を判定
if(num % 3 == 0 && num % 5 == 0){
  console.log('3と5の倍数です');
}//3の倍数を判定
else if(num % 3 == 0){
  console.log('3の倍数です');
}//5の倍数を判定
else if(num % 5 == 0){
  console.log('5の倍数です');
}else{
  console.log(num);
}

