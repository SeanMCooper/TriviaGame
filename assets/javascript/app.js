var timeRemains;
var gameRun = false;
var questionsLeft = 10;

var score = [
    {correct : 0,
    wrong : 0
    }
]

function countDown(){
    timeRemains--;
    console.log(timeRemains);
    $("#timeLeft").text(timeRemains);
    if(timeRemains === 0){
        nextQuestion;
        score.wrong++;
        clearInterval(gameTimer);
    }
}

$("#startButton").on("click", function(){
    if(gameRun === false){
    console.log("button clicked")
    gameStart();
    }
})

function nextQuestion(){
    // shows next question in html, resets timer
    timeRemains = 10;
    var currentQuestion = questionObj[0]
    $("#nextQuestion").text(currentQuestion.question);
    gameTimer = setInterval(countDown, 1000);
    $("#questionsLeft").text(questionsLeft);
    nextAnswers();
}




function nextAnswers(){
    // shows next choices
    var currentQuestion = questionObj[0]
    $("#nextAnswer1").text(currentQuestion.choice1);
    $("#nextAnswer2").text(currentQuestion.choice2);
    $("#nextAnswer3").text(currentQuestion.choice3);
    $("#nextAnswer4").text(currentQuestion.choice4);
    var answer = currentQuestion.answer;
    checkAnswer(answer);
    console.log(questionObj[0].answer);
    questionObj.splice(0,1);
    console.log(questionObj);
    
    
}
function checkAnswer(x){
    $(".answerButton").on("click", function(event){
        console.log(x);
        console.log(".answerbutton class triggered")
        var clickedButton = $(event.target).text()
        event.stopImmediatePropagation();
        if(x === clickedButton){
            console.log("correct answer")
            score.correct++;
            nextQuestion();
            clearInterval(gameTimer);
        }else{
            console.log("wrong answer")
            score.wrong++;
            nextQuestion();
            clearInterval(gameTimer);
        
        }
    })
}

function gameStart(){
    if(gameRun === false){
        console.log("game started")
        gameRun = true;
        nextQuestion();
    }   
}