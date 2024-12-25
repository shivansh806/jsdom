let box = document.querySelector(".box")
let btn = document.querySelector("button")

btn.addEventListener('click' , function(){
    let x = Math.floor(Math.random()*255)
    let y = Math.floor(Math.random()*255)
    let z = Math.floor(Math.random()*255)

    box.style.backgroundColor = `rgb(${x},${y},${z})`
})