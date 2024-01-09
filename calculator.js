const myDisplay = document.getElementById("display");
const myClear = document.getElementById("clear");
const myDelete  = document.getElementById("delete");
const myInsert = document.getElementById("inputed");
const myEqual = document.getElementById("equal");

// adding event listeners

myInsert.addEventListener("click", (e)=>{ 
const item = e.target;
if(item.classList.contains("insert")){
myDisplay.value += item.value;
}});

myClear.addEventListener("click", ()=> myDisplay.value = "");
myDelete.addEventListener("click", ()=> myDisplay.value = myDisplay.value.toString().slice(0,-1));
myEqual.addEventListener("click", ()=> myDisplay.value = eval(myDisplay.value));


