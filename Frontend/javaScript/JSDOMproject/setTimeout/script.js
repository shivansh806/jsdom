var btn = document.querySelector("button")
var h2 = document.querySelector("h2")

var flag = 0
btn.addEventListener("click",function(){
    if(flag == 0){
        h2.innerHTML = "Sending request......"
        h2.style.color = "yellow"
        btn.innerHTML = "Adding......"
        setTimeout(function(){
           h2.innerHTML = "Friends"
           h2.style.color = "green"
           btn.innerHTML  = "Unfollow"
        },3000)
        flag = 1
    }else{
        h2.innerHTML = "Stranger"
        h2.style.color = "red"
        btn.innerHTML = "Follow"
        flag = 0
    }
})