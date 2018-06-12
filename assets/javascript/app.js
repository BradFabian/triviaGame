$(document).ready(function() {

// declare vars//
var rightScore = 0;
var wrongScore = 0;
var timer = setInterval(timerfunc,1000 * 30);
function timerfunc() {

}

var triviaQuestion1 = "What is the worlds biggest Shark?";



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