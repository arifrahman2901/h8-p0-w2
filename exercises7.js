//Soal Nomor 1
var rows1 = 5;
var i = 1;
for(var i = 1; i <= 5; i ++){
    console.log('*');   
}
console.log('\n');

//Soal nomor 2
var rows2 = 5;
var s ='';
for ( var i = 1; i<=rows2; i++){
    for(var j = 1; j<=rows2; j++){
        s+='*';
    }
        s+='\n';
}
    console.log(s);

    //Soal Nomor 3
var s = '';
for (var i = 1; i <= 5; i++ ){
    for(var j = 1; j <= i; j++){
        s+='*';
  
    }
    s+='\n';
}       
console.log(s);
