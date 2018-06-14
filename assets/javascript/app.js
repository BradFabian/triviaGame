    var questions = [{
    ques: "What is the worlds biggest Shark?",
    ans:["Great White","Hammer Head","Whale Shark","Bull Shark"],
    name:"bigShark",
    correct:"Whale Shark",
    divClass:".whaleShark"
  },
  {
    ques:"How many species of sharks are there?",
    ans:  ["470", "800", "280", "80"],
    name: "species",
    correct:"470",
    divClass:".speciesnum"
  },
  {
    ques:"Sharks can detect as little as one part per million of what in seawater?",
    ans:["Blood","Motion","Electrical Fields","Sound"],
    name: "detect",
    correct:"Blood",
    divClass:".detectBlood"
  },
  {
    ques:"Sharks are fish that have a skeleton made of what?",
    ans: ["Bones", "Cartilage", "Collagen", "Calcium"],
    name: "skeleton",
    correct:"Cartilage",
    divClass:".skeletonMake"
  },
  {
    ques:"Sharks typically swim at an average speed of what mph?",
    ans:["30", "15","5", "10"],
    name: "speed",
    correct: "5",
    divClass: ".speedSwim"
  },
  {
    ques:"When attacking, a typical shark can reach how many mph?",
    ans:["30", "15","20", "12"],
    name:"attack",
    correct:"12",
    divClass:".attackSpeed"
   
  },
  {
    ques:"What type of shark can survive in fresh water?",
    ans:["Hammer Head", "Nurse Shark", "Bull Shark", "Black Tip"],
    name:"survive",
    correct:"Bull Shark",
    divClass:".surviveFresh"
  },
  {
    ques:"Before the 16th century sharks were commonly called what?",
    ans:["Dark Knights","Sea Dogs","Hell Hounds","Cutthroats"],
    name:"sharkName",
    correct:"Sea Dogs",
    divClass:".sharkDogs"
   
  },
  {
    ques:"How many teeth do sharks lose over their life?",
    ans:["2,000", "15,000", "5,000", "30,000"],
    name:"teeth",
    correct: "30,000",
    divClass: ".teethLoss"
  },
  {
    ques:"Sharks have existed for how long?",
    ans: [ "50 million years", "100,000 years", "300,000 years", "350 million years"],
    name: "years",
    correct: "350 million years",
    divClass:".millionYears"
  }
  ]
  


  // questions//
console.log(questions);

var labels = ["first", "second", "third", "forth"];


//onclick start timer and switch html//

var startGame = $("#startButton").on('click', function() {
  $(this).parent().hide();
  $('.container').show();
  countdown(60);
  questionDisplay();
  console.log(startGame);
  
});

  // function for displaying questions
var questionDisplay = function() {
  $(".questions :not('#sub-but')").empty();

  // loops through the 10 questions 
  for (var j = 0; j < 10; j++) {
  $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
  $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
  // loops through answers for each radio button
  for (var i = 0; i < 4; i++) {
      $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
  }
  $('.questions').prepend('<hr />');
  }
  }
  
  
  // function for countdown timer
  var countdown = function(seconds) {
  
  var timer = setInterval(function() {
  seconds = seconds - 1;
  $("#time-remain").html(seconds);
  
  if (seconds <= 0) {
      $('.container').fadeOut(500);
      var correctAnswers = 0;
      var wrongAnswers = 0;
      var unAnswered = 0;
  
      // loop through correctArray & radioName to match html elements & answers
      for (var i = 0; i < 10; i++) {
  
          if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
  
              correctAnswers++;
              console.log("this is correct! number:" + i)
          } else {
              wrongAnswers++;
              console.log("this is wrong! number:" + i)
          };
      }
      $('#correctTimesUp').append(correctAnswers);
      // display wrongAnswers
      $('#wrongTimesUp').append(wrongAnswers);
      $('#timesUp').fadeIn(1000).show();
  
      // alert("Times Up!");
      clearInterval(timer);
      return;
  }
  }, 1000);
   // click event for submit button to stop timer
   $('#sub-but').on('click', function() {
      clearInterval(timer);
  })
  }; // end countdown
  
  
  // function to grade quiz once submit button is clicked
  var gradeQuiz = $('#sub-but').on('click', function() {
  
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unAnswered = 0;
  
  // loop through correctArray & radioName to match html elements & answers
  for (var i = 0; i < 10; i++) {
  
      if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
  
          correctAnswers++;
      } else {
          wrongAnswers++;
      };
  };
  
  // once submit is clicked...
  // tests
  
  // stop timer
  countdown();
  // fade out questions
  $('.container').fadeOut(500);
  // show answerScreen
  $('#answerScreen').show();
  // display correctAnswers
  $('#correctScreen').append(correctAnswers);
  // display wrongAnswers
  $('#wrongScreen').append(wrongAnswers);
  
  });

  
          