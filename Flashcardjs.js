const questions = [
  {
     question: "which is largest animal in the world?",
     answers:"Blue WHale"
  },
   {
     question: "which is largest Liver in the world?",
     answers: "Nile"
   },
    {
     question: "which is biggest country in the world?",
     answers:"Russia" 
   },
    {
     question: "which is strongest animal in the world?",
     answers: "Lion"
   }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const showButton = document.getElementById("show-btn");

let currentQuestionIndex = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  showQuiz();
}

function showQuiz(){
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  showButton.addEventListener("click",()=>{
    answerButtons.innerHTML =  currentQuestion.answers;
  });
  showButton.style.display = "inline";
  nextButton.innerHTML = "Next";
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    displayNext();
  }else{
    startQuiz();
  }
});

function displayNext(){
  answerButtons.innerHTML = "";
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuiz();
  }else{
    questionElement.innerHTML = "Session ended";
    showButton.style.display = "none";
    nextButton.innerHTML = "Try again";  
  }
}
 
startQuiz();

    