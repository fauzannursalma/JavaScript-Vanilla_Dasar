// ===== VARIABEL =====
console.log("======= VARIABEL =======");

var curros = 'Original';
console.log(curros);
curros = "Honey";
console.log(curros);

let iceCream = 'chocolate';
console.log(iceCream);
iceCream = "Vanilla";
console.log(iceCream);

const milkShake = 'Strawberry';
console.log(milkShake);
// Const untuk menyimpan value yg nilainya tetap/konstanta (tidak bisa di ubah valuenya)

// VAR menganut sistem functional scope, dimana VAR 
// tidak bisa diakses jika kita mencoba mengaksesnya 
// dari luar function, tetapi masih bisa diakses dari 
// luar block lain seperti perulangan atau percabangan (if-else). 
// Sementara LET dan CONST tidak bisa diakses baik di luar function, percabangan, maupun perulangan.


// ===== TIPE DATA ===== 
console.log("======= TIPE DATA =======");

let pizza = 5;
console.log(typeof pizza);
pizza = 'cheese';
console.log(typeof pizza);
pizza = undefined;
console.log(typeof pizza);
pizza = 9007199254740993n;
console.log(typeof pizza);
pizza = Symbol("Blackpaper");
console.log(typeof pizza);
pizza = false;
console.log(typeof pizza);

// 6 Type Data Primitive 
// - String
// - Number
// - Boolean
// - Undifined
// - BigInt 
// - Symbol

// Primitive Values
// - Boolean
// - Null
// - Number
// - String
// - Undifined
// - BigInt
// - Symbol

// ===== OPERATOR ===== 
console.log("======= OPERATOR =======");
// Aritmatika
// +, -, %, /, .
let apel = 1+2;
console.log('Apel = ' + apel);
console.log('Apel - 1 = ' + --apel);
console.log("Apel + 1 = " + ++apel);
  // Unary (+ / -)
  let ceri = '3'
  console.log(+ceri);
  console.log(-ceri);

// Operator Assigment
// contoh x=y, y+=x, x-=y dll
apel += 1;
console.log('Apel + 1 = ' + apel);
apel -= 1;
console.log('Apel - 1 = ' + apel);


// Operator Comparison
// Contoh x==y, x===y. x!=y, x<=y, x>=y, x!==y, x<y, x>y
if (apel == 2) console.log(apel);
else console.log('Apel tidak sama dengan 2');

// Operator Logical
let sukaApel = true;
let sukaCeri = false;

if(sukaApel && sukaCeri)
console.log("Suka Apel & Ceri"); 
else if(sukaApel || sukaCeri) 
console.log("Suka Apel/Ceri");

console.log(!apel);

// Operator String
sukaApel = "Apel"; 
sukaCeri = "Ceri";
console.log(sukaApel + ' & ' + sukaCeri);
console.log(`${sukaApel} ${sukaCeri}`); // String Literal ES6











