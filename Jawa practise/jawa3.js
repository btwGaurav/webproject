// let a = 23;
// let i = 0;
// while(i<a){
//   console.log(i)
//   i++;
// }

// const { arrayBuffer } = require("stream/consumers")

// function average(x,y){
//   console.log("done")
//   return Math. round(x+y)/2
// }
// let g = 34;
// let b = 23
// console.log("average of g and b is", average(g,b))

// const sum = (x)=>{
//   return x*x
// }
//   console.log(sum(4))
// let marks = {
//   harry : 90,
//   subham : 9,
//   lovish : 56,
//   monika : 4
  
// }
// for(i=0 ; i<Object.keys(marks).length; i++){
//   console.log("Marks of "+ Object.keys(marks)[i] + " are " + 
//              marks[Object.keys(marks)[i]])
// }
// const  mean = (a ,b,c,d)=>{
//   return (a+b+c+d)/4}
// console.log(mean(4,5,6,7))
// let i = 0;
// const count = (i)=>{
//   while(i<10){
//     i++
//     console.log(i)
//   }
  
// }
// count(i)
// let str = []

// //nikhil is a harry pramod
// let sentence = `boy1 is a friend of boy 2`
//   console.log(sentence)

// let name = "nikhi"
// let friend2 =           "          meena                    "
// console.log(friend2.trim())

// let game = "Russulmainiya"
// let i = 0;
// const str = () => {
//   while(i<game.length)
//     {  console.log(game[i])
//        i++
//     }
// }
// str()
// console.log(game.toLowerCase())
// let str2 = " please give 10000 rupees"
// let amount = str2.slice(12)
// console.log(amount)

// let friend = "deepika"
// friend[4] = "a"
// friend[6] = " "
// console.log(friend)

// let gac = [1,2,3,4,5,6,7,8,9,null]

// gac.forEach((element) =>{
//   console.log(element*element)
// })
// let name = "hardik"
// arr = Array.from(name)
// console.log(arr)

//for of loop

//chapeter 5 pratise se
//question 1
// let array = [1,1,2,3,4,4,4,4,4,5,5,54,]
// array.push(23)
// console.log(array)
//question 2 
// let number = 23;
// let a = 23;
// do{
//   console.log("enter a number")
// }while(a!= 23){
//   console.log("you have entered a correct no.")
  
//       }

//       alert("Enter the value of a ")
// let a = prompt("Enter a Here")
// let b = Number.parseInt(a)
// let write = confirm("Do you want to wrtie it on the page")
// if(write){
//    document.write(b)
  
// }
// else{
//   alert("let me please write it on the page")
// }
                  
// let runAgain = true;

// const canDrive = (age) => {
//   return age >= 18 ? true : false
// }

// while (runAgain) {
//   let age = prompt("Enter your age")
//   age = Number.parseInt(age)
//   if (age < 0) {
//     console.error("Please enter a valid age");
//     break;
//   }

//   if (canDrive(age)) {
//     alert("Yes you can drive")
//   }
//   else {
//     alert("You cannot drive")
//   }
//   runAgain = confirm("Do you want to play again?")
// }
const loadScript = async (src)=>{
  return new promise((resolve, reject) => {
    let script = document.createElement("script")
    script.src = src
    script.onload = () =>{
      resolve(src)
      
    }
    document.head.append(script)


  })
}
const main2 = async () => {
let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
 console.log(a)

}
main2()
