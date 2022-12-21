const button = document.getElementById("button-click");
const h1 = document.getElementById("h1");
const p = document.getElementById("p");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const question = document.getElementById("question");
const answer = document.getElementById("answers");

const questions = [
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },

    {
        question: "first question",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "2"
    },

    {
        question: "first question",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "2"
    },

    {
        question: "first question",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "2"
    },

    {
        question: "first question",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "2"
    },

    {
        question: "first question",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "2"
    },

    {
        question: "first question",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "2"
    }   
]

let questionIndex = 0;
function displayQuestions() {
    const currentQuestion = questions[questionIndex]
    question.textContent = currentQuestion.question

    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const button = document.createElement("button")
        button.textContent = currentQuestion.answers[i]
        button.addEventListener("click", checkAnswer)
        answer.append(button)
    }
}

function checkAnswer(event){
    console.log(event.target.innerText);
    const currentQuestion = questions[questionIndex]
    
    if(event.target.innerText === currentQuestion.correctAnswer){
        console.log("Correct")

    }
    else{
        console.log("Wrong")
    }
}

button.addEventListener("click", function () {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    displayQuestions()
});