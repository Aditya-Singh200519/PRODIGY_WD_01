
var mainbox = document.querySelector('.main-container');
var navbar = document.querySelector('.nav-bar')
var para =  document.querySelectorAll('p')


function changecolor()
{
    if(window.scrollY>10)
    {
        navbar.classList.add("active");
        para.forEach(p =>p.classList.add("active"))
    }
    else
    {
        navbar.classList.remove("active");
        para.forEach(p => p.classList.remove("active"))
    }

}


document.addEventListener("scroll",()=>
{
    changecolor();
})






