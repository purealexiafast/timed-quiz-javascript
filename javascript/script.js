const button = document.getElementById("button-click");
const h1 = document.getElementById("h1");
const p = document.getElementById("p");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const question = document.getElementById("question");
const answer = document.getElementById("answers");
let time = document.getElementById("timer");
let timer;
let timeCount = 5;
let questionFeedback = document.getElementById("questionFeedback");
let endScreen = document.getElementById("end-screen");
const submitButton = document.getElementById("submit-button");
let initialBox = document.getElementById("initials");



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
        answer.append(button)
    }
}

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
    questionIndex ++;
    setTimeout(displayQuestions, 2000)
}



button.addEventListener("click", function () {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    displayQuestions()


    startCountdown();

});

function startCountdown() {
    timer = setInterval(() => {
        console.log(timeCount);
        timeCount--;



        if (timeCount <= 0) {
            time.textContent = "Your time is up!";
            clearInterval(timer);
            gameScreen.style.display = "none";
            startScreen.style.display = "none";
            endScreen.style.display = "block";
        }

        else {

            time.textContent = "Time: " + timeCount;

        }
    }, 1000);

}

function getInitials (){
    const initials = initialBox.value;
    const score = timeCount;
    console.log(timeCount);
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
    

    //load previous players scores from local storage
    //display previous scores with my score sorted (top scores)
    //update local storage with my score clipped at 15 scores

}


submitButton.addEventListener("click", getInitials)



















