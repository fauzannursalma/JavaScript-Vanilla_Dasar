const namaMantan = ['Dasha','Kira','Wanda','Alifa'];
console.log(namaMantan);
console.log(namaMantan[0]);
console.log(namaMantan.length);

namaMantan.forEach( function(item, index, array){
  console.log(item, index);
});

// Push menambahkan data pada array
// namaMantan.push('Lauren');
// console.log(namaMantan);

// Pop menghapus data pada index array paling akhir
// namaMantan.pop();
// console.log(namaMantan);

// Unshift menambahkan data pada index array paling awal
// namaMantan.unshift('Sasha');
// console.log(namaMantan);

// Shift menghapus data pada index array paling awal
// namaMantan.shift('Sasha');
// console.log(namaMantan);

// Mencari index dari data pada array
// console.log(namaMantan.indexOf('Kira') + 1);

// Splice Menghapus data dgn posisi index
// namaMantan.splice(namaMantan.indexOf('Sasha'), 1);
// console.log(namaMantan);

// const namaMantanLama = namaMantan.slice();

// namaMantan.pop();

// console.log('Nama Mantan: ' + namaMantan);
// console.log('Nama Mantan Lama: ' + namaMantanLama);

// Array method reduce
// console.log(
//   namaMantan.reduce( function(acc, mantan, ke){
//     acc[mantan] = `Mantan ke ${ke+1}`

//     return acc
//   }, {}) //['Alifa]
// );

// Perulangan
// for(let index = 0; index < namaMantan.length; index++){
//   const element = namaMantan[index];
//   console.log(element);
// }

// let index =0;
// while(index < namaMantan.length){
//   const element = namaMantan[index];
//   console.log(element);
//   index++;
// }

// Map
console.log(namaMantan.map(function(item, index){
  return `${item} adalah mantan ke ${index+1}`
  }).join(", ")
);

console.log(namaMantan.filter(function(item, index){
  return item == "Kira";
  }).map(function(item, index){
  return `${item} adalah mantan ke ${index+1}`
  })
);