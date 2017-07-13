/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `cards` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(cards) {
  let totalValue = 0;

  for (let i = 0; i < cards.length; i++) {
      totalValue = parseInt(cards[i]) + totalValue;
    }
  //   cards[i] = parseInt(cards [i]);
  // }


// loop over all cards and convert to total value
// convert string value into number
// add numerical value to total value

  return totalValue;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
