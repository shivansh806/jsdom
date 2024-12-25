// var h1 = document.createElement("h1")
// console.log(h1)

// var h1 = document.createElement("h1")
// var body = document.querySelector("body")

// body.appendChild(h1)
// h1.innerHTML = "Hello gyusssssssss"
// h1.style.color = "red"
// h1.style.fontSize = "40px"


// swap two images 

var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var btn = document.querySelector("button")



btn.addEventListener("click" , function(){
    var img1Src = img1.getAttribute('src')
    var img2Src = img2.getAttribute('src')
    
    img1.setAttribute('src' , img2Src)
    img2.setAttribute('src' , img1Src)

})
