//PSEUDOCODE
/** 
SET NAMA
SET PERAN
IF NAMA NULL AND PERAN NULL
DISPLAY "NAMA HARUS DIISI"
ELSE IF NAMA NOT NULL AND PERAN NULL
DISPLAY "HALO NAMA,PILIH PERANMU UNTUK MEMULAI GAME"
ELSE IF NAMA NULL AND PERAN NOT NULL
DISPLAY "NAMA HARUS DIISI"
ELSE IF NAMA NOT NULL AND PERAN KSATRIA
DISPLAY "SELAMAT DATANG DI DUNIA PROXYTIA, NAMA"
DISPLAY "HALO KSATRIA NAMA, KAMU DAPAT MENYERANG DENGAN SENJATAMU"
ELSE IF NAMA NOT NULL AND PERAN TABIB
DISPLAY "SELAMAT DATANG DI DUNIA PROXYTIA, NAMA"
DISPLAY "HALO TABIB NAMA, KAMU AKAN MEMBANTU TEMANMU YANG TERLUKA"
ELSE IF NAMA NOT NULL AND PERAN PENYIHIR
DISPLAY "SELAMAT DATANG DI DUNIA PROXYTIA, NAMA"
DISPLAY "HALO PENYIHIR NAMA, CIPTAKAN KEAJAIBAN YANG MEMBANTU KEMENANGANMU!"
*/
var nama ='';
var peran ='';
if (nama === '' && peran === ''){
    console.log('Nama dan peran harus diisi!');  
} else if (nama !== '' && peran === ''){
    console.log(' Halo ' + nama + ', Pilih peranmu untuk memulai game');
} else if (nama === '' && peran !==''){
    console.log('Nama harus diisi! ');
}
 else if (nama !== '' && peran ==='Ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama );
    console.log('Halo Ksatria ' +  nama + ' , kamu dapat menyerang dengan senjatamu! ');

} else if (nama !== '' && peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama );
    console.log('Halo Tabib ' + nama + ' , kamu akan membantu temanmu yang terluka. ');
} else if (nama !== '' && peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama );
    console.log(' Halo Penyihir ' + nama + ' , ciptakan keajaiban yang membantu kemenanganmu! ');
}