var users = [
    {
      dp: "https://images.unsplash.com/photo-1732492211739-16eea9575e84?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Vinod"
    },
    {
      dp: "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1731432248469-8e16b091c7d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Ananya_Nair"
    },
    {
      dp: "https://images.unsplash.com/photo-1615199951711-efaf9391bfc8?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://plus.unsplash.com/premium_photo-1670161434750-d2798af413d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Rohan_Verma"
    },
    {
      dp: "https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1731432248202-61ac4468fd52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Ishita_Kaur"
    },
    {
      dp: "https://images.unsplash.com/photo-1592827095305-68f21edefb82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1734532873375-574fd74045c5?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Vivaan_Patel"
    }
  ];

  var sum = ''
  users.forEach(function(obj,idx){
     sum = sum +`<div class="status" id = "${idx}">
                    <img src="${obj.dp}" alt="">
                    <div class = "status-in">
                        <h4>${obj.username}</h4>
                        <h5>5hrs ago</h5>
                    </div>
            </div>`
  })

  var allstatus = document.querySelector(".allstatus")
  allstatus.innerHTML = sum

  var overlay = document.querySelector(".overlay")
  var growth = document.querySelector(".growth")
  var h4 = document.querySelector("h4")
  var img = document.querySelector(".smCircle img")

  allstatus.addEventListener("click" , function(dets){
      var gold = users[dets.target.id]
      
      overlay.style.display = 'block'
      overlay.style.backgroundImage = `url(${gold.story})`
      h4.innerHTML = gold.username
      img.setAttribute("src" ,`${gold.dp}`)
      
      var grow = 0
      var interval = setInterval(function(){
        grow++
        growth.style.width = grow + '%'
       
      },30)
      setTimeout(function(){
         overlay.style.display = 'none'
         clearInterval(interval)
      },3000)
      
  })


