const questions = [
    {
        question: "Which country is the happiest country in the world?",
        answers: [
            { text: "Canada", correct: "false"},
            { text: "Finland", correct: "true"},
            { text: "Brazil", correct: "false"},
            { text: "Italy", correct: "false"},
        ]
    },
    {
        question: "Which language is the most difficult language to learn?",
        answers: [
            { text: "Chinese", correct: "true"},
            { text: "Finnish", correct: "false"},
            { text: "Portuguese", correct: "false"},
            { text: "Italian", correct: "false"},
        ]
    },
    {
        question: "What country is the coldest in the world?",
        answers: [
            { text: "Iceland", correct: "true"},
            { text: "Canada", correct: "false"},
            { text: "U.S.A", correct: "false"},
            { text: "England", correct: "false"},
        ]
    },
    {
        question: "which one of these cities is one of the expensive cities in the world?",
        answers: [
            { text: "Sao Paulo", correct: "false"},
            { text: "Rome", correct: "false"},
            { text: "Lisboa", correct: "false"},
            { text: "Geneva", correct: "true"},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "  + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}


startQuiz();