// A simple list of quiz questions and their answers.
const allQuestions = [
    { text: "What is the capital of France?", answers: ["London", "Berlin", "Paris", "Madrid"], correct: "Paris" },
    { text: "Which planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter", "Venus"], correct: "Mars" },
    { text: "What is 7 + 8?", answers: ["13", "14", "15", "16"], correct: "15" },
    { text: "What is the largest ocean on Earth?", answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correct: "Pacific Ocean" },
    { text: "What is the powerhouse of the cell?", answers: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"], correct: "Mitochondria" }
];

// Get the key parts of the web page.
const quizElement = document.getElementById('quiz-screen');
const questionElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('answers-container');
const nextButton = document.getElementById('next-button');
const resultsScreen = document.getElementById('results-screen');
const scoreText = document.getElementById('score-text');

let currentQuestionIndex = 0;
let score = 0;

// This function shows one question on the screen.
function showQuestion() {
    optionsContainer.innerHTML = '';
    const currentQuestion = allQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.text;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-button');
        button.onclick = () => selectAnswer(answer);
        optionsContainer.appendChild(button);
    });
}

// This function checks if the answer is correct when a button is clicked.
function selectAnswer(selectedAnswer) {
    const currentQuestion = allQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        score++;
    }
    
    // Move to the next question.
    currentQuestionIndex++;
    if (currentQuestionIndex < allQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// This function shows the final score.
function showResults() {
    quizElement.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    scoreText.textContent = `You scored ${score} out of ${allQuestions.length}.`;
}

// Start the quiz when the start button is clicked (you need to add this in HTML).
document.getElementById('start-button').onclick = () => {
    document.getElementById('welcome-screen').classList.add('hidden');
    quizElement.classList.remove('hidden');
    showQuestion();
};

// Restart the quiz from the beginning.
document.getElementById('restart-button').onclick = () => {
    resultsScreen.classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
};
