
/* 
psuedo code
 
Click to Start "onclick function"
Timer begins at 60 seconds and countdown "setInterval"
Player goes through all 10 questions 
player can only guess one answer per question
Once completed, player submit's answers "loop/function"
HTML is updated with users score ".html/.append"
Score includes: time spent, answers correct, and answers wrong "score function" */


//




$(document).ready(function() {

// declare vars//
var rightScore = 0;
var wrongScore = 0;
var timer = setInterval(timerfunc,1000 * 60);
function timerfunc() {

}

var questions = [{
  ques: "What is the worlds biggest Shark?",
  ans:["Great White","Hammer Head","Whale Shark","Bull Shark"],
  name:"bigShark",
  correct:"Whale Shark",
  divClass:".whaleShark",
},
{
  ques:"How many species of sharks are there?",
  ans:  ["470", "800", "280", "80"],
  name: "species",
  correct:"470",
  divClass:".speciesnum",
},
{
  ques:"Sharks can detect as little as one part per million of what in seawater?",
  ans:["Blood","Motion","Electrical Fields","Sound"],
  name: "detect",
  correct:"Blood",
  divClass:".detectBlood",
},
{
  ques:"Sharks are fish that have a skeleton made of what?",
  ans: ["Bones", "Cartilage", "Collagen", "Calcium"],
  name: "skeleton",
  correct:"Cartilage",
  divClass:".skeletonMake",
},
{
  ques:"Sharks typically swim at an average speed of what?",
  ans:["30 mph", "15 mph","5 mph", "10 mph"],
  name: "speed",
  correct: "5 mph",
  divClass: ".speedSwim",
},
{
  ques:"When attacking, a typical shark can reach what speed?",
  ans:["30 mph", "15 mph","20 mph", "12 mph"],
  name:"attack",
  correct:"12 mph",
  divClass:".attackSpeed",
 
},
{
  ques:"What type of shark can survive in fresh water?",
  ans:["Hammer Head", "Nurse Shark", "Bull Shark", "Black Tip"],
  name:"survive",
  correct:"Bull Shark",
  divClass:".surviveFresh",
},
{
  ques:"Before the 16th century sharks were commonly called what?",
  ans:["Dark Knights","Sea Dogs","Hell Hounds","Cutthroats"],
  name:"sharkName",
  correct:"Sea Dogs",
  divClass:"sharkDogs",
 
},
{
  ques:"How many teeth do sharks lose over their life?",
  ans:["2,000", "15,000", "5,000", "30,000"],
  name:"teeth",
  correct: "30,000",
  divClass: "teethLoss",
}] // questions//



//onclick start timer and switch html//

$(function() {

    $("#startButton").on('click',function() {
      
      var content = '<tbody class= "text-white" "id= timer">'+ questions  +'</tbody>';
      $('#mainText').replaceWith('<div class="jumbotron bg-info text-white" id="mainText">' + content + '</div>');
      console.log(content)
      $('#timer').html(timer);
    });
  
  });


//form function//




//win and lose condtions//

//tallly correct and incorrect on html//

});