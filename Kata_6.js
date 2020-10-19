const ticket1 = [25, 25, 50]; // => YES
const tickets2 = [25, 100]; // => NO. Vasya will not have enough money to give change to 100 dollars
const tickets3 = [25, 25, 50, 50, 100]; // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
const avMoney = [];

function tickets(peopleInLine) {
  peopleInLine.forEach((money) => {
    if (money <= 25) {
      avMoney.push(money);
    } else {
      //
    }
  });

  return avMoney;
  //   if (a) {
  //     return "YES";
  //   } else {
  //     return "NO";
  //   }
}
const result = tickets(ticket1);

console.log(result);
