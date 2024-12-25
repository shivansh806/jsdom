
var img = document.querySelector("img")
var body = document.querySelector("body")
var valueX = 0
var valueY = 0
body.addEventListener("keydown", function(dets){
    if(dets.code == "ArrowRight"){
        valueX++
        img.style.left = valueX + "%"
    }else if(dets.code == "ArrowLeft"){
        valueX--
        img.style.left = valueX + "%"
    }else if(dets.code == "ArrowDown"){
        valueY++
        img.style.top = valueY + "%"
    }else if(dets.code == "ArrowUp"){
        valueY--;
        img.style.top = valueY + "%"
    }
    else{
        console.log("other key pressed")
    }
})