var body = document.querySelector("body")
var cur = document.querySelector(".box")
var h1  = document.querySelector("h1")

body.addEventListener("mousemove" , function(dets){
     cur.style.left = dets.x + "px"
     cur.style.top = dets.y + "px"
})

h1.addEventListener("mouseenter" , function(){
    cur.style.scale = 3
})

h1.addEventListener("mouseleave" , function(){
    cur.style.scale = 1
})
