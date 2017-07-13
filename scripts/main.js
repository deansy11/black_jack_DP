/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `cards` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

let allCards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    function handValue(cards) {
      let totalValue = 0;

      for (let i = 0; i < cards.length; i++) {
          if(cards[i] === "K" || cards[i] === "Q") {
            cards[i] = 10;
          }
          totalValue = parseInt(cards[i]) + totalValue;
        }
      //   cards[i] = parseInt(cards [i]);
      // }

    // loop over all cards and convert to total value
    // convert string value into number
    // add numerical value to total value

      return totalValue;
    }


// function handValue(cards) {
//   let totalValue = 0;
//   for (let i = 0; i < cards.length; i++) {
//     let value = parseInt(allCards[i]);
//
//     if(allCards[i] === "J" || allCards[i] === "K" || allCards[i] === "Q") {
//       allCards = 10;
//     for (let t = 0; t < allCards.length; t++){
//       totalValue = cards[i] + totalValue;
//       }
//
//       }
//
//     }
//     return totalValue;
//
//   }
  //   cards[i] = parseInt(cards [i]);
  // }


// loop over all cards and convert to total value
// convert string value into number
// add numerical value to total value



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
