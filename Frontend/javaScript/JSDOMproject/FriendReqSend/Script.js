var btn = document.querySelector("button")
var h5 = document.querySelector("h5")
var im = document.querySelector("img")


var flag = 0
btn.addEventListener("click" , function(){
    if(flag == 0){
        h5.innerHTML = "Friends"
        btn.innerHTML = "Remove Friends"
        h5.style.color = "Green"
        im.style.borderColor = "Green"
        flag = 1
    }else{
        h5.innerHTML = "Stranger"
        btn.innerHTML = "Add Friends"
        h5.style.color = "red"
        im.style.borderColor = "red"
        flag = 0;
    }
})