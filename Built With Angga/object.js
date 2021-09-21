const Person = {
    firstName: 'Alifa',
    lastName: 'Khadijah',
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    },
    weight: 64,
    height: 172,
    weightIdeal: function() {
      const heightMinus100 = this.height - 100;

      return heightMinus100 - (heightMinus100 * 10 )/100;
    },
    NeedDiet: function(){
      const weightIdeal = this.weightIdeal();
      if(weightIdeal - 5 > this.weight)
        return "You need more protein, need more weight" + (weightIdeal - this.weight)+"Kg";
      else if(weightIdeal + 5 < this.weight)
        return "You need to diet, need reduce weight " + (this.weight - weightIdeal)+"Kg";
      else
      return "You are ideal, Keep it up";
    }
};

console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.NeedDiet());

// const countries = {
//   ID: {
//     province: ['Jawa Barat', 'Jawa Tengah', 'Jawa Timur'],
//     city: ['Bandung', 'Semarang', 'Surabaya']
//   },
//   RU: {

//   }
// }

// const indonesia = countries?.ID?.province; // Optional Chaining
// console.log(indonesia);
// const rusia = countries?.RU?.city ?? 'Not Found'; // Null coalescing
// console.log('Rusia = ' + rusia);