var circ = document.querySelector(".circle")
var btn = document.querySelector("button")
var lg = document.querySelector("body")

var flag = "off"
btn.addEventListener('click',function(){
     if(flag == "off"){
        circ.style.backgroundColor = "yellow"
        lg.style.backgroundColor = "white"
        btn.innerHTML = "OFF"
        flag = "on"
     }else{
        circ.style.backgroundColor = "black"
        lg.style.backgroundColor = "black"
        btn.innerHTML = "ON"
        flag = "off"
     }
})