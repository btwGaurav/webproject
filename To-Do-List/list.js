const inputbox = document.querySelector("#input-box")
const listcontainer = document.querySelector(".list-container")

function addTask(){
    if (inputbox.value === "") {
        alert("You must write something")
        
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "X"
        li.appendChild(span)
    }
    inputbox.value = "";
    saveData();
}
listcontainer.addEventListener( "click" , function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if( e.target.tagName === "SPAN"
    ){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data" , listcontainer.innerHTML)
}
function showlist(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showlist()