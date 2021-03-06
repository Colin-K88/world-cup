/* Java code used and edited from YouTube viedo to suit simplistic need of website / Find in README*/
/*jshint esversion: 6 */
let currentQuestion = 0;
let score = 0;
let totalQuestion = questions.length;

const container = document.getElementById('quizContainer');
const questionEl = document.getElementById('question');
const opt1 = document.getElementById('opt1');
const opt2 = document.getElementById('opt2');
const opt3 = document.getElementById('opt3');
const opt4 = document.getElementById('opt4');
const nextButton = document.getElementById('submitButton');
const resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	let q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
}
function loadNextQuestion () {
	let selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
    let answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totalQuestion - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totalQuestion){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);