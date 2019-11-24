function balikKata(kata){
 
/* Menggunakan reverse
return kata.split('').reverse().join(''); */

/* Menggunakan looping */
var str='';
for(var i = kata.length -1; i> 0; i --){
        str+=kata[i];
}
        return str;
}
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

