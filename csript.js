"use strict"

let elform=document.querySelector(".form")
let elinputhour=document.querySelector(".hour")
let elinputminut=document.querySelector(".minute")
let elinputsecund=document.querySelector(".secund")


let elsoat=document.querySelector(".soat")
let eldaqiqa=document.querySelector(".daqiqa")
let elsoniya=document.querySelector(".soniya")
let elbtn = document.querySelector(".btn")
let music = new Audio('nasheed.mp3')


elform.addEventListener("submit", function(e){
    e.preventDefault()
    let soat = Number (elinputhour.value)
    let daqiqa = Number (elinputminut.value)
    let soniya = Number (elinputsecund.value)
    let allsecond = soat*3600 + daqiqa*60 + soniya




let interval = setInterval(()=>{
      
     if(allsecond<=0){
        clearInterval(interval)
        music.play()
     }

    calc(allsecond)
    allsecond--
    
},1000)
     elbtn.style.display= 'none' 
})

function calc(seconds){
   let hour = Math.floor(seconds/3600)
   seconds = seconds - hour * 3600
   let minut = Math.floor(seconds/60)
   seconds = seconds - minut * 60

   elsoat.textContent = hour
   eldaqiqa.textContent = minut
   elsoniya.textContent = seconds
}

