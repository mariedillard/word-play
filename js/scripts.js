$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    // this takes the sentence written and submitted to the page
    var sentence = $("input#sentence").val();
    //this splits the sentence into an array
    var sentenceSplit = sentence.split (' ');
    // this creates a variable to store our array that carries only three letter words!
    var newSentence = [ ];
    // this creates a variable to store our array with only three letter words but now reversed!
    var reverseSentence = [ ];
    // this creates a variable to store our final product!
    var finalSentence;

    // this gathers all words in our array that are three letters long and creates a new array with them
    for ( var i = 0; i<sentenceSplit.length; i++){
      if (sentenceSplit[i].length === 3) {
        newSentence.push(sentenceSplit[i]);
      }
    };
    // this reverses that array making the sentence (but not the words) backwards, and sets our previously established variable to it's result
    reverseSentence = newSentence.reverse();
    // this joins the array together creating a new sentenence, and sets our previously established variable to it's result
    finalSentence = reverseSentence.join(" ");
    // this shows the finished sentence to us!
    $("#output").text(finalSentence);
  });
});
