var coinPurse = {}

var curent
var count
var idk = 0


  function currentcoin() {
    idk = 0
    while(total >= current) {
      total = total - current
      idk += 1
      }
  }

  current = 25
  count = 0
  var total = prompt("How much monies?")
  
  total = parseFloat(total) * 100

  currentcoin()
  
  coinPurse.quarters = idk
  current = 10
  currentcoin()
  coinPurse.dimes = idk
  current = 05
  currentcoin()
  coinPurse.nickels = idk
  current = 01
  currentcoin()
  coinPurse.pennies = idk

  console.log(coinPurse)