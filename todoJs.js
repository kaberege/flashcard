const todoList = document.getElementById("todo-list");
const listButton = document.getElementById("list-btn");
const listOutput = document.getElementById("listed");
const filterSelect = document.getElementById("my-select");

//event Listners
listButton.addEventListener("click",addList);
listOutput.addEventListener("click",deleteCheck);
filterSelect.addEventListener("click",mySelected);

//functions

function addList(){
  if(todoList.value === ""){
    alert("Enter text");
  }else{
    //mydiv section
    const myDiv = document.createElement("div");
    myDiv.classList.add("my-div");
    
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
    todoList.value = "";
  }
}

// delete and check function
  function deleteCheck(e){
    const myItem = e.target;
    if(myItem.classList.contains("my-checkbox")){
       const myChecked = myItem.parentElement;
       myChecked.classList.toggle("completed");
    }
   
    if(myItem.classList[0] === "my-button"){
      const myRemove = myItem.parentElement;
      myRemove.remove();
    }
}

//select completed task function

function mySelected(e){
  const doList = listOutput.childNodes;
  doList.forEach(function(myDiv){
    switch(e.target.value){
    case "all":
       myDiv.style.display = "flex";
      break;
    case "completed":
      if(myDiv.classList.contains("completed")){
        myDiv.style.display = "flex";
      }else{
         myDiv.style.display = "none";
       } 
      break;
     case "uncompleted": 
        if(!myDiv.classList.contains("completed")){
        myDiv.style.display = "flex";
      }else{
         myDiv.style.display = "none";
       } 
       break;   
}
});
}
