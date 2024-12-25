var names = [{
    user: 'Avantika',
    age: 20,
    city: "Bhopal"
},
{
    user: 'Ankit',
    age: 21,
    city: "Sitamarhi"
},
{
    user: 'Shivam',
    age: 28,
    city: "Delhi"
}
]

var body = document.querySelector("body")

var sum = ''

names.forEach(function(obj){
    sum = sum + `<div class="card">
        <h1>${obj.user}</h1>
        <h4>${obj.age} , ${obj.city}</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
    </div>`
})

body.innerHTML = sum