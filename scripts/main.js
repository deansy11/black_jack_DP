/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `cards` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// let allCards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    function handValue(cards) {
      let totalValue = 0;

      for (let i = 0; i < cards.length; i++) {
          if(cards[i] === "K" || cards[i] === "Q" || cards[i] === "J") {
            cards[i] = 10;
          } else if( cards[i] === "A" && totalValue <= 10) {
            cards[i] = 11;
          } else if( cards[i] === "A" && totalValue > 10) {
            cards[i] = 1;
          }
          totalValue = parseInt(cards[i]) + totalValue;
    }
    if(totalValue > 21 && cards.includes(11)) {
      totalValue = totalValue - 10;
    }
    return totalValue;
  }
