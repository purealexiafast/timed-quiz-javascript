//Variables Defined

const button = document.getElementById("button-click");
const h1 = document.getElementById("h1");
const p = document.getElementById("p");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const question = document.getElementById("question");
const answer = document.getElementById("answers");
let time = document.getElementById("timer");
let timer;
let timeCount = 60;
let questionFeedback = document.getElementById("questionFeedback");
let endScreen = document.getElementById("end-screen");
const submitButton = document.getElementById("submit-button");
let initialBox = document.getElementById("initials");
var scores = 0;
const viewScore = document.getElementById("scores");


//View High Score Link

viewScore.addEventListener("click", function () {
    startScreen.style.display = "none";
    endScreen.style.display = "block";


});

//Questions for Quiz, including correct answer

const questions = [
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },

    {
        question: "What is JavaScript?",
        answers: ["Object-Based language", "Assembly-language", "High-level language", "Object-Oriented language"],
        correctAnswer: "Object-Based language"
    },

    {
        question: "Which of the following keywords is used to define a varibale in JavaScript?",
        answers: ["const", "let", "const & let", "none of the above"],
        correctAnswer: "const & let"
    },

    {
        question: "How can a datatype be declared to be a constant type?",
        answers: ["const", "let", "var", "constant"],
        correctAnswer: "const"
    },

    {
        question: "How are objects compared when they are checked with the strict equality operator?",
        answers: ["the contents are compared", "their references are compared", "both A & B", "none of the above"],
        correctAnswer: "their references are compared"
    }

]


let questionIndex = 0;
function displayQuestions() {
    questionFeedback.textContent = "";
    const currentQuestion = questions[questionIndex]
    question.textContent = currentQuestion.question
    answer.innerHTML = "";

    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const button = document.createElement("button")
        button.textContent = currentQuestion.answers[i]
        button.addEventListener("click", checkAnswer)
        button.classList.add("answersButton")
        answer.append(button)
    }
}

//Style questions

document.getElementById("question").style.textAlign = "center";
answer.style.display = "flex";
answer.style.flexDirection = "column";
document.getElementById("end-screen").style.textAlign = "center";


//Display "correct or wrong" to selected answer

function checkAnswer(event) {
    console.log(event.target.innerText);
    const currentQuestion = questions[questionIndex]

    if (event.target.innerText === currentQuestion.correctAnswer) {
        console.log("Correct")
        questionFeedback.textContent = "Correct";
        questionFeedback.style.color = "green";
        
    }
    else {
        console.log("Wrong")
        timeCount -= 10;
        questionFeedback.textContent = "Wrong";
        questionFeedback.style.color = "red";

    }
    questionIndex++;
    setTimeout(displayQuestions, 2000)

    if (questionIndex > questions.length - 1) {
        setTimeout(endQuiz, 2000)
        
    }
}

function endQuiz() {
    clearInterval(timer);
    gameScreen.style.display = "none";
    startScreen.style.display = "none";
    endScreen.style.display = "block";
}

//Display game screen when button clicked

button.addEventListener("click", function () {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    displayQuestions()


    startCountdown();

});

//Start timecount

function startCountdown() {
    timer = setInterval(() => {
        console.log(timeCount);
        timeCount--;



        if (timeCount <= 0) {
            time.textContent = "Your time is up!";
            timeCount = 0;
            endQuiz();
        }

        else {

            time.textContent = "Time: " + timeCount;

        }
    }, 1000);

}

//Created Initials and Score

const savedScores = JSON.parse(localStorage.getItem("highScores")) || []
function getInitials() {
    let initials = initialBox.value;
    let score = timeCount;
    console.log(timeCount);
    console.log(savedScores);
    if (score > savedScores.score || savedScores.length === 0) {
        localStorage.setItem("highScores", JSON.stringify({
            initials, score
        }))
        alert("You beat the high score!")
    } else {
        score = savedScores.score
        initials = savedScores.initials
        alert("You did not beat the high score.");

        
    }

    //template literal

    endScreen.innerHTML = `<h2>High Scores</h2>
    <table>
      <tr>
        <th>Initials</th>
        <th>Score</th>
      </tr>
      <tr>
        <td class = "initials"></td>
        <td class = "score"></td>
      </tr>
    </table>`
    let initialData = document.querySelector(".initials")
    let scoreData = document.querySelector(".score")
    initialData.textContent = initials
    scoreData.textContent = score
}
submitButton.addEventListener("click", getInitials)

