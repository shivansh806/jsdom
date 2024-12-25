var teams = ['MI' , 'RCB', 'CSK','RR','GT', 'PBKS', 'SRH']

var btn = document.querySelector("button")
var h2  = document.querySelector('h2')
btn.addEventListener('click' , function(){
    var index = Math.floor(Math.random()*teams.length)
    h2.innerHTML = teams[index]
    h2.style.color = "green"
})
