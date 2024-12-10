let view = "white"
let a = document.querySelector(".btn")
let mode = () =>{
    a.addEventListener("click",change)

}

let change = () => {
    if(view === "white") {
        document.querySelector(".great").setAttribute("href","mode2.css");
        view = "dark"
        document.querySelector(".btn").innerHTML = "Change to Light mode"
        
    }
    else{
        document.querySelector(".great").setAttribute("href","mode.css");
        view = "white"
            document.querySelector(".btn").innerHTML = "Change to Dark mode"

    }
}

mode()