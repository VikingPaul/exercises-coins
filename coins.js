// /*
//   Input: 0.67
//   Output:
//   {
//     quarters: 2,
//     dimes: 1,
//     nickels: 1,
//     pennies: 2
//   }

// */

// function coinCounter () {
//   // Initialize a JavaScript object to hold the coins
//   var coinPurse = {};

//   coinPurse.quarters = 0;

//   return coinPurse;
// }

// var coins = coinCounter()
// console.log();

var curent
var coinArray
var count



  function currentcoin() {
    while(total >= current) {
      console.log("total before subtracting", total);
      total = total - current
      coinArray[count] += 1
      console.log("total left", total);
    }
  }

  current = 25
  coinArray = [0,0,0,0]
  count = 0
  var total = prompt("How much monies?")
  
  total = parseFloat(total) * 100

  currentcoin()
  
  count ++
  current = 10
  currentcoin()
  count ++
  current = 05
  currentcoin()
  count ++
  current = 01
  currentcoin()

  alert(coinArray[0] + " Quarters " + coinArray[1] + " Dimes " + coinArray[2] + " Nickels " + coinArray[3] + " Pennies ")