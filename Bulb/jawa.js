const a = document.querySelector(".btn");
const light = document.querySelector("#first");
const container = document.querySelector("#new");

let touch = true

let now = () => {
a.addEventListener("click", change
)    

}

let change = () => {
  container.classList.toggle("container2");
   light.classList.toggle("first2")
   
     if(touch === true){
    a.innerHTML = "Turn off"
    touch = false
    a.style.scale = "1"
  }else{
    a.innerHTML = "Turn on"
    touch = true
     a.style.scale = "1.1"
  }
}







now();

