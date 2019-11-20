//Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
var x ='';
var o ='';
for(var i =0; i<str.length; i++){
  /* Menampung huruf x dan o */
  if(str[i]=== 'x'){
    x++;
  } else {
    o++;
  } 
}
/* perbandingan */
if (x === o){
  return true;
} else {
  return false;
}
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true