$(document).ready(function() {
    var randomQuote;
    var randomAuthor;
    var currentIndex, previousIndex;

  function newQuote() {
    var quote = ["The sky above the port was the color of television tuned to a dead channel.", "Often is the object of a desire, when desire is transformed into hope, becomes more real than reality itself.", "You gotta be one of the good guys, son: 'cause there's way too many of the bad.", "Do or do not, there is no try.", "I love the smell of Napalm in the morning.", "A man chooses, a slave obeys.", "All those moments will be lost in time...like tears in rain...time to die."];
    var author = ["-William Gibson", "-Umberto Eco", "-John Custer", "-Yoda", "-Lt. Kilgore", "-Andrew Ryan", "-Roy Batty"];
    //Use math to randomize the quote output

    // New solution for pseudocode
    // randomly generate a num between 0 - arr.lenth - 1
    // store that random number in currentIndex
    // loop as long as currentIndex is the same as prevIndex
    // if the same, reassign currentIndex a new random num
    // set the prevIndex value to the currentIndex value
    do {
      currentIndex = Math.floor((Math.random() * quote.length) - 1);
    }
    while (currentIndex === previousIndex) {
      currentIndex = Math.floor((Math.random() * quote.length) - 1);
    }
    previousIndex = currentIndex;

    // Old Code for reference, has bug
    //  while(random === currentIndex){
    //    random = quote.length
    //  }
    // var random = Math.floor((Math.random()*quote.length));
    randomQuote = quote[currentIndex];
    randomAuthor = author[currentIndex];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
  $(".btn").on("click", function() {
    newQuote();
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(randomQuote + "-" + randomAuthor));
  });

});
