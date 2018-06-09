$(document).ready(function() {

// declare vars//


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