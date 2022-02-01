
var openBtn = document.getElementById("phone-open-nav-btn");
var closeBtn = document.getElementById("close-btn")
var nav = document.getElementById("phone-nav");

// open nav
openBtn.addEventListener('click', () => {
    nav.style.left = 0;
});

//close nav
closeBtn.addEventListener('click',() =>{
    nav.style.left = "-120%";
})