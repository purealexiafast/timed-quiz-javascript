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