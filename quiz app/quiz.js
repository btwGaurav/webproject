const questions = [
    {
        question: "Color of the sky is?",
        answers : [
            {text: "red", correct: false},
            {text: "grey", correct: false},
            {text: "green", correct: false},
            {text: "blue", correct: true},
        ]
    },
    {
        question: "Color of the Nightsky is?",
        answers : [
            {text: "red", correct: false},
            {text: "black", correct: true},
            {text: "green", correct: false},
            {text: "blue", correct: false},
        ]
    },
    {
        question: "Color of the apple is?",
        answers : [
            {text: "red", correct: true},
            {text: "grey", correct: false},
            {text: "green", correct: false},
            {text: "blue", correct: false},
        ]
    },
    {
        question: "Which one is the biggest continent in the world?",
        answers : [
            {text: "asia", correct: true},
            {text: "africa", correct: false},
            {text: "antarica", correct: false},
            {text: "europe", correct: false},
        ]
    }
]
const questionElement = document.getElementById("question");
const answerbutton = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    answerbutton.innerHTML = ""; // Clear previous answers
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerbutton.appendChild(button);
    });
}

function selectAnswer(isCorrect) {
    // Disable all buttons after an answer is selected
    const buttons = answerbutton.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true; // Disable buttons to prevent multiple clicks
    });

    // Highlight the selected button
    buttons.forEach(button => {
        const answerText = button.innerHTML;
        const correctAnswer = questions[currentQuestionIndex].answers.find(a => a.correct).text;

        // Add a green background for the correct answer and red for incorrect
        if (answerText === correctAnswer) {
            button.style.backgroundColor = "green";
            button.style.color = "white";
        } else {
            button.style.backgroundColor = "red";
            button.style.color = "white";
        }
    });

    // Increment score if the selected answer is correct
    if (isCorrect) {
        score++;
    }

    // Wait for a short time before moving to the next question
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            alert(`Quiz finished! Your score: ${score}/${questions.length}`);
            startquiz();
        }
    }, 1000); // Wait 1 second before proceeding
}


startquiz();
