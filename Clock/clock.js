let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()
console.log(h ,m ,s ,d)
let time = () =>{
document.querySelector(".hours1").innerHTML = h;
document.querySelector(".Minutes1").innerHTML = m;
document.querySelector(".seconds1").innerHTML = s;
document.querySelector(".dates1").innerHTML = d;
}
time()