$(document).ready(function() {

// declare vars//
var rightScore = 0;
var wrongScore = 0;
var triviaQuestions = "What is the worlds biggest Shark?";

//onclick start timer and switch html//

$(function() {

    $("#startButton").on('click',function() {
      
      var content = 'Testing....1,2,3';
      $('#mainText').replaceWith('<div class="jumbotron bg-info" id="mainText">' + content + '</div>');
      console.log(content)
    });
  
  });


//form function//




//win and lose condtions//

//tallly correct and incorrect on html//

});