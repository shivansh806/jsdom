 var btn = document.querySelector("button")
 var h1 = document.querySelector("h1")
 var growth = document.querySelector(".growth")
 var grow = 0
 btn.addEventListener("click",function(){
         
        var growInterval = setInterval(function(){
        grow++
        h1.innerHTML = grow +"%"
        growth.style.width = grow + "%"
       },100)
     
       setTimeout(function(){
           clearInterval(growInterval)
           btn.innerHTML = "Downloaded.."
           btn.style.opacity = 0.5
           btn.style.pointerEvents = "none"
       },10000)

 })