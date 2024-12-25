var users = [
    {
      dp: "https://images.unsplash.com/photo-1732492211739-16eea9575e84?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Your story"
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
      story: "https://images.unsplash.com/photo-1731174219400-a47a6b6ad929?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Vivaan_Patel"
    }
  ];

  var sum = ''
  users.forEach(function(obj,idx){
    sum = sum + `<div class="storyAll">
                <div class="story">
                    <img id=${idx} src="${obj.dp}" alt="">
                </div>
                <h5>${obj.username}</h5>
            </div>`
  })
  var storiyan = document.querySelector(".storiyan")
  storiyan.innerHTML = sum

  var full = document.querySelector(".full")
  var h5 = document.querySelector(".rgt h5")
  var grwoth = document.querySelector(".progress .growth")
  var img = document.querySelector(".rgt .smCircle img")

  
  storiyan.addEventListener("click" , function(dets){
      var value = users[dets.target.id]
      
      full.style.display = "block"
      full.style.backgroundImage = `url(${value.story})`
      img.setAttribute("src" , value.dp)
      h5.innerHTML = value.username
      var grow = 0
      var interval = setInterval(function(){
         grow++
         grwoth.style.width = grow +"%"
      },50)

      setTimeout(function(){
        full.style.display = "none"
        clearInterval(interval)
      },5000)
  })
