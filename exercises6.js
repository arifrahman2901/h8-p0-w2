// SOAL NOMOR 1  
//PERULANGAN WHILE
/*console.log('LOOPING PERTAMA');
var i = 2;
while ( i <= 20 ) {
console.log( i + ' - ' + ' I love coding' );
i += 1;
i++;
} 
console.log('LOOPING KEDUA');
var a = 20;
while ( a > 0) {
    console.log( a + ' - ' + ' I will become fullstack developer ');
    a-=1;
    a--;
}
//SOAL NOMOR 2
//PERULANGAN FOR
console.log('LOOPING PERTAMA');
var i = 0;
for (var i = 0; i <=20; i ++){
    console.log( i + ' - ' + ' I love coding' );
    i+=1;
}
console.log('LOOPING KEDUA');
var a = 20;
for ( var a = 20; a > 0; a --){
    console.log( a + ' - ' + ' I will become fullstack developer ');
    a-=1;
}
*/
//SOAL NOMOR 3
//ANGKA GANJIL DAN GENAP
//var i = 1;
//for (var i = 1; i <= 100; i++) {
//    if ( (i % 2) === 0){
//        console.log(i + ' GENAP ');
//    } else {
//        console.log(i + ' GANJIL ');
//    }
//}
// Buatlah 3 perulangan baru dari 1 - 100, 
//dengan pertambahan counter sebesar 2, 5, dan 9.

//kelipatan 3 ditambahkan 2
var i = 1;
for (var i = 1; i <= 100; i+=2) {
    if((i % 3) === 0){
        console.log( i + ' Kelipatan 3');
        } 
    }   
    
    //kelipatan 6 ditambahkan 5
var i = 1;
for(var i = 1; i <= 100; i+=5) {
    if((i % 6) === 0){
        console.log( i + ' Kelipatan 6 ');
    }
}

//kelipatan 10 ditambahkan 9
var i = 1;
for(var i = 1; i <= 100; i+=9){
    if((i % 10 )=== 0){
        console.log( i + ' Kelipatan 10 ');
    }
}