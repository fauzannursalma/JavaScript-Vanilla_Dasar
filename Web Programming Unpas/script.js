var x = 10;
console.log("Hello World!");
console.log("X = " + x);

// Pop Up Box : alert, prompt, confirm
    // alert('Hello World!');

    // var cek = true;
    // while (cek === true) {
    //   var nama = prompt('Masukkan Nama: ');
    //   alert('Halo ' + nama);

    //   cek = confirm('Coba Lagi');

    // }

// Control Flow JS
  // Normal Flow 
  // Statement di baca & dijalankan dari atas kebawah 
  // atau dari kiri ke kanan
  // Control Flow
  // - Pengulangan (Loop/Iteration) : for, while, do
  // - Pengkondisian (Percabangan) : if, if else, if else if else, switch

  // var lagi = true;
// while(lagi == true){
//   var angka = prompt('Masukan angka : ');
//   if(angka % 2 == 0){
//     alert(angka + " adalah Bilangan Genap.");
//   } else if (angka % 2 == 1){
//     alert(angka + ' adalah Bilangan Ganjil.');
//   } else {
//     alert('Yang anda masukan bukan angka');
//   }
//   lagi = confirm('Coba lagi ?');
// }

// var i = 1;
// while (i <= 10){
//   if(i <= 6 && i !== 5){
//       console.log("Angkot No " + i + " berjalan dengan baik.");
//   } else if(i == 8 || i == 10 || i == 5){
//       console.log("Angkot No " + i + " sedang lembur.");
//   } else {
//       console.log("Angkot No " + i + " sedang tidak beroperasi.");
//   }
//   i++;
// }

var i = prompt('Masukkan Angka');
switch(i){
  case '1' :
    alert ('Anda memasukan angka 1');
    break;
  case '2' :
    alert ('Anda memasukan angka 2');
    break;
  default :
    alert('angka yang anda masukan bukan 1 atau 2');
    break;

}

