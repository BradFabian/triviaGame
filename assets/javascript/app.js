$(document).ready(function() {

// declare vars//
var rightScore = 0;
var wrongScore = 0;
var timer = setInterval(timerfunc,1000 * 30);
function timerfunc() {

}

var triviaQuestion1 = "What is the worlds biggest Shark?";
"How many species of sharks are there?";
"A: Over 470.";

"Sharks can detect as little as one part per million of what in seawater?";
"A: Blood.";
"Sharks are fish that have a skeleton made of what?"
A: Cartilage.;
"Sharks typically swim at an average speed of what?"
A: 5.0 mph.;

 "When attacking, a typical shark can reach what speed?"
A: 12 mph.;
"What type of sharks can survive in fresh water?"
A: Bull shark and River shark.;
"Before the 16th century sharks were commonly called what?"
A:  Sea dogs.;
"How many teeth do sharks lose over their life?"
A: 30,000 or more.;



//onclick start timer and switch html//

$(function() {

    $("#startButton").on('click',function() {
      
      var content = '<tbody class= "text-white" "id= timer">'+ triviaQuestion1  +'</tbody>';
      $('#mainText').replaceWith('<div class="jumbotron bg-info text-white" id="mainText">' + content + '</div>');
      console.log(content)
      $('#timer').html(timer);
    });
  
  });


//form function//




//win and lose condtions//

//tallly correct and incorrect on html//

});