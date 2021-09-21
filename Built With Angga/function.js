// function no(x = 0){
//   return x+1;
// }
// // console.log(no(2));

// Anonymous Function
// (function(x=0){
//   console.log(x+1)
// })(3);

// const hiya = (x=0) => {
//   return x+1;
// };
// console.log(hiya(7));

// function addSquares(a,b){
//   function square(x){
//     return x * x;
//   }
//   return square(a) + square(b);
// }
// console.log(addSquares(1,2)); // => 5

// Function recrusive
function loop(x){
  if(x >= 10) return;
  console.log(x);
  loop(x +1)
}

loop(1);