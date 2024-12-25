var btn = document.querySelector("button")
var body = document.querySelector("body")


btn.addEventListener("click" , function(){

    var valueX = Math.random() * 96
    var valueY = Math.random() * 97
    var rotate = Math.random() * 360


    var img = document.createElement('img')
    img.setAttribute('src' , 'https://www.pngarts.com/files/12/Ladybug-Bugs-PNG-Transparent-Image.png')
    img.style.height = "100px"
    img.style.position = "absolute"
    img.style.left = valueX + "%"
    img.style.top = valueY + "%"
    img.style.rotate = rotate + "deg"
    body.appendChild(img)
})