// select all elements

const bGImg = document.getElementById("bGImg");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const restart = document.getElementById("restart");


// create questions as array of objects
let questions = [
    {
        question : "What is the correct sequence of HTML tags for starting a webpage?",
        imgSrc : "images/html.png",
        choiceA : "Head, Title, HTML",
        choiceB : "Title, Head, HTML",
        choiceC : "HTML, Head, Title",
        correct : "C"
    },{
        question : " Where in an HTML document is the correct place to refer to an external stylesheet?",
        imgSrc : "images/css.png",
        choiceA : "In the 'head' section ",
        choiceB : "In the 'body' section",
        choiceC : " Between head and body ",
        correct : "A"
    },{
        question : "What is the correct syntax for referring to an external script called 'xxx.js'?",
        imgSrc : "images/js.png",
        choiceA : "script href= xxx.js",
        choiceB : "script name= xxx.js",
        choiceC : "script src= xxx.js",
        correct : "C"
    }, {
        question : "Who is making the Web Standards?",
        imgSrc : "images/web.jpg",
        choiceA : "Mozilla",
        choiceB : "The World Wide Web Consortium",
        choiceC : "Microsoft",
        correct : "B"
    }
    ,{
        question : "Are CSS property names case-sensitive?",
        imgSrc : "images/css.png",
        choiceA : "Yes",
        choiceB : "No",
        choiceC : " Sometimes",
        correct : "B"
    }
];


const noOfQuestions = questions.length
const lastQuestion = questions.length - 1;  //index of last question/object of the "questions" array
let runningQuestion = 0;                   //index of the current questin, to begin make it 0
//
const questionTime = 15; // 15s
let TIMER;
let count = 0;

//
let score = 0;
let failureB = new Audio("Audio/failureButton.mp3")
let winningB = new Audio("Audio/winningButton.mp3")

let audioClap = new Audio("Audio/winner.mp3")
let audioFailure = new Audio("Audio/failure.mp3")


////////////////////////////// functions///////////////////////////////

// render progress, making progress flags (white, green or red circles) according to the No.of Qs.
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>"; //adding flag(div) for each question with id number (question index)
    }
}

// answer is correct, the flag background color turns to green
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#32a852"; //accessing the flag by its id and turn its color to green
    winningB.play();

}

// answer is Wrong, the flag background color turns to red
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#bd322d";
    failureB.play();

}



// render a question
function renderQuestion(){  // making up the quiz page
    let q = questions[runningQuestion];   //q is current object of the array "questions"
    /// 
    // console.log(q)
    question.innerHTML = "<p>"+ q.question +"</p>"; // Adding "question" property from the object to the element with id "question" in the HTML
    qImg.innerHTML = "<img src="+ q.imgSrc +">";    // Adding "imgSrc" property from the object to the element with id "qImg" in the HTML
    choiceA.innerHTML = q.choiceA;                 // ...
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

    ///

    

}




function checkAnswer(answer){ // 1)check the answer to update the flag, then set the timer to the next Q. 
                            //2)check if it is the last Q, no:move to next Q, yes:clear the timer and call score function
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++; // increment the score when answer is correct
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count=0;
    // 

    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER); // stop timer to show the score page
        scoreRender();
    }
}



function scoreRender(){
    clearInterval(TIMER);

    scoreDiv.style.display = "block";

    
    // choose the image based on the scores
    let img = (score == noOfQuestions) ? "images/5.png" :
              (score > 0) ? "images/4.png" :
              "images/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p> You Scored "+ score +" Out of "+noOfQuestions+"!</p>";
    
    if(score==noOfQuestions){
        audioClap.play();
        $("body").css("background-image", "url(images/ballons.gif)")
   }

   if(score==0){
    audioFailure.play();

    
}
}




start.addEventListener("click",startQuiz); // adding an event listener "click" to the element with id "start", after clicking "startQuiz" function is called

// start quiz
function startQuiz(){  //showing the quiz page
    start.style.display = "none"; // stop showing the start page
    renderQuestion();            // prepering the current object/question
    renderProgress();            //making the flags
    quiz.style.display = "block";// showing the current question by disabling the "none" display of quiz element in the HTML to "block" 
    restart.style.display = "block"; 

    
    TIMER = setInterval(function(){
       
       
        if(count <= questionTime){
            $("#counter").text(count)     //Display the timer
            count++
        }        
        else {   // whent time is up, Timer is reseted, progress flag=red, next Q displayed
         count = 0;
         answerIsWrong()
         if(runningQuestion < lastQuestion ){ // Go to the next question, if exists
             runningQuestion++
             renderQuestion()
             }
             else {
                clearInterval(TIMER); 
                scoreRender();
            }               //No more Qs ===> display the score page
        }
       

    }, 1000)
}


function reset(){
    clearInterval(TIMER); 
    runningQuestion = 0;
    count = 0
    score = 0
    $("body").css("background-image", "none")
    scoreDiv.style.display = "none"
    $("#progress").html('')
    quiz.style.display = "none";
    start.style.display = "block";

    // startQuiz()
}