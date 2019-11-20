//Tugas 1
//Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.

function shoutOut() {
    console.log('Halo Function!');
  }
  shoutOut();


//Tugas 2
//Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.
  
var num1 = 5;  
var num2 = 6;
function calculateMultiply(){
return num1 * num2;
}
var hasilPerkalian = calculateMultiply(6,5);
console.log(hasilPerkalian);
 
//Tugas 3
//Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(){
    console.log('Nama saya ' + name + ' , umur saya ' + age + ' , alamat saya di ' + address + ' hobby saya ' + hobby );
}
var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);