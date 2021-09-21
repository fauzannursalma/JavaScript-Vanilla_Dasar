// const fruit = 'Banana';
// let nameFruit = '';
// switch (fruit){
//   case 'Banana':
//     nameFruit = 'Banana';
//     break;
//   case 'Apple':
//     nameFruit = 'Apple';
//     break;
//   case 'Strawberry':
//     nameFruit = 'Strawberry';
//     break;
//   default:
//     nameFruit = 'Watermelon';
//     break;
// }
// console.log(nameFruit);

let no;
function pilihBuah(no){
  switch(no){
    case 1:
      return 'Markisa';
    case 2:
      return 'Apel';
    case 3:
    case 4:
      return 'Mangga';
    
    default:
      return 'Blueberry';
  }
}
console.log(pilihBuah(3))