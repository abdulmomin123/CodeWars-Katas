// const ticket1 = [25, 25, 50]; // => YES
// const tickets2 = [25, 100]; // => NO. Vasya will not have enough money to give change to 100 dollars
// const tickets3 = [25, 25, 50, 50, 100]; // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
// let avMoney = [];

// function tickets(peopleInLine) {
//   peopleInLine.forEach((money) => {
//     if (money <= 25) {
//       avMoney.push(money);
//     } else {
//       const change = money - 25;
//       const totalMoney = avMoney.reduce((cur, acc) => cur + acc);

//       if (totalMoney >= change) {
//         avMoney = [money];
//       } else {
//       }
//     }
//   });

//   return avMoney;
//   //   if (a) {
//   //     return "YES";
//   //   } else {
//   //     return "NO";
//   //   }
// }
// const result = tickets(ticket1);

// console.log(result);

// let Human = Object.create(null, {
//   getAge: {
//     value: function () {
//       console.log(this.age);
//     },
//     writable: true,
//   },
//   getColor: {
//     value: function () {
//       console.log(this.color);
//     },
//     writable: true,
//   },
//   getName: {
//     value: function () {
//       console.log(this.name);
//     },
//   },
// });

// let momin = Object.create(Human, {
//   name: {
//     value: "Momin",
//     writable: true,
//   },
//   age: {
//     value: 18,
//     writable: true,
//   },
//   color: {
//     value: "white",
//     writable: true,
//   },
// });

// momin.getAge();

// // changing the function
// Human.getAge = function () {
//   console.log(this.age + 2);
// };

// // just a reference not a copy!
// momin.getAge();

// let anotherObject = {
//   a: 2,
// };

// function Vehicle(engines, seats) {
//   this.engines = engines;
//   this.seats = seats;

//   Vehicle.prototype.getEngines = function () {
//     console.log(this.engines);
//   };
//   Vehicle.prototype.getSeats = function () {
//     console.log(this.seats);
//   };
// }

// const vh1 = new Vehicle(1, 4);
// vh1.getSeats();

// console.log(vh1);

let Task = {
  getType: function () {
    console.log(this.type);
  },
  getName: function () {
    console.log(this.name);
  },
};

let Code = {
  getTime: function () {
    console.log(this.time);
  },
  getProject: function () {
    console.log(this.project);
  },
};

let ReadBooks = {
  getBookName: function () {
    console.log(this.name);
  },
  getCurrentPage: function () {
    console.log(this.page);
  },
};
