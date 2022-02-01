const cursor = document.querySelector('.cursor');
const cursorSize = 10

document.addEventListener('mousemove', e =>{
    cursor.setAttribute("style", `top: ${e.pageY - cursorSize/2}px; left: ${e.pageX - cursorSize/2}px;`);
});