const todoList = document.getElementById("todo-list");
const listButton = document.getElementById("list-btn");
const listOutput = document.getElementById("listed");
const filterSelect = document.querySelector(".my-select");

//event Listners
listButton.addEventListener("click",addList);
listOutput.addEventListener("click",deleteCheck);
filterSelect.addEventListener("click",mySelected);

//functions
listOutput.innerHTML = "";
function addList(){
  if(todoList.value === ""){
    alert("Enter text");
  }else{
    //mydiv section
    const myDiv = document.createElement("div");
    myDiv.classList.add("mydiv");
    
    // creating a radio button
    const  myCheckbox = document.createElement("input");
    myCheckbox.type = "checkbox";
    myCheckbox.classList.add("my-checkbox");
   // myRadio.setAttribute("type", "checkbox");
    myDiv.appendChild(myCheckbox);
    
     // creating a list of items
    const myText = document.createElement("li");
    myText.innerHTML = todoList.value;
    myText.classList.add("my-text");
    myDiv.appendChild(myText);
  
    // creating delete button
    const myButton = document.createElement("button");
    myButton.innerHTML = "<i class='fas fa-trash'></i>";
    myButton.classList.add("my-button");
    myDiv.appendChild(myButton);
    listOutput.appendChild(myDiv);
  }
    todoList.value = "";
}

// delete and check function
  function deleteCheck(e){
    const myItem = e.target;
    if(myItem.classList.contains("my-checkbox")){
       const  mydiv = myItem.parentElement;
        mydiv.classList.toggle("completed");
    }
   
    if(myItem.classList[0] === "my-button"){
      const  mydiv = myItem.parentElement;
      mydiv.remove();
    }
}

//select completed task function
function mySelected(e){
 const doList = listOutput.childNodes;
 doList.forEach(function(mydiv){
    switch(e.target.value){
    case "all":
       mydiv.style.display = "flex";
      break;
    case "completed":
      if(mydiv.classList.contains("completed")){
        mydiv.style.display = "flex";
      }else{
         mydiv.style.display = "none";
       } 
      break;
     case "uncompleted": 
        if(!mydiv.classList.contains("completed")){
        mydiv.style.display = "flex";
      }else{
         mydiv.style.display = "none";
       } 
       break;   
}
});
} 
