const questions = [
  {
     question: "which is largest animal in the world?",
     answers: [
        {text: "Shark", correct: false},
        {text: "Blue WHale", correct: true},
        {text: "Elephant", correct: false},
        {text: "Giraffe", correct: false}
     ]
  },
   {
     question: "which is largest Liver in the world?",
     answers: [
        {text: "Nile", correct: false},
        {text: "Yangtse", correct: true},
        {text: "Mississipi", correct: false},
        {text: "Zambezi", correct: false}
     ]
   },
    {
     question: "which is biggest country in the world?",
     answers: [
        {text: "Russia", correct: false},
        {text: "USA", correct: true},
        {text: "Canada", correct: false},
        {text: "China", correct: false}
     ]
   },
    {
     question: "which is strongest animal in the world?",
     answers: [
        {text: "Cheeter", correct: false},
        {text: "Lion", correct: true},
        {text: "Elephant", correct: false},
        {text: "Rat", correct: false}
     ]
   }
];

const sample = document.getElementById("sample");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const myArr = [];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex= 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
    const myDiv = document.createElement("div");
    const button = document.createElement("button");
    const radioInput = document.createElement("input");
    radioInput.type = "radio"
    radioInput.name = "rad"
    radioInput.value = answer.correct;
    button.value = answer.correct;
    radioInput.classList.add("check");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    myDiv.appendChild(radioInput);
    myDiv.appendChild(button);
    answerButtons.appendChild(myDiv);
    button.addEventListener("click",selectAnswer);
  }); 
}

function resetState(){
  nextButton.style.display = "inline";
  while(answerButtons.firstChild){
  answerButtons.removeChild(answerButtons.firstChild);
  }
}

nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){
  displayNext();
}else{
  startQuiz();
}
});

function displayNext(){
  let scored =  answerButtons.childNodes;
  scored.forEach(scored => {
  if(scored.firstChild.checked === true && scored.firstChild.value === "true"){
  score++;
}else{
  score = score;
}
});
   currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    questionElement.innerHTML = "Session ended"; 
    answerButtons.innerHTML = "Your score is: " + ((score / questions.length) * 100) + "%";
     nextButton.innerHTML = "Try again"; 
  } 
}

 function selectAnswer(e){
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct == "true";
   if(isCorrect){
     selectedBtn.classList.add("correct");
   }else{
      selectedBtn.classList.add("incorrect");
    }
} 
startQuiz();

    