const myPass = document.getElementById("pass-input");
const myCopy = document.getElementById("fa-copy");
const myButton = document.getElementById("generate");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvw"; 
const symbol = "~!'@#$%^&*()_-+=[]|{}:\<,>.?/"; 
const number = "0123456789";
const passLength = 12;
const allChars = upper + lower + symbol + number;

myButton.addEventListener("click", passGen);

function passGen(){
  let password = "";
  password += upper[Math.floor(Math.random() * upper.length)]; 
  password += lower[Math.floor(Math.random() * lower.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  password += number[Math.floor(Math.random() * number.length)];
  
  while(passLength > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  myPass.value = password;
}
