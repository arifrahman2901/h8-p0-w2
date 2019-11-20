function konversiMenit(menit) {
    // you can only write your code here!
    var min = (Math.floor(menit/60));
    var sec = menit % 60;  
    if (sec < 5 ){
    return min + ':0' + sec; 
  } 
  else {
      return min + ':' + sec;
  }

}
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
