let menu= document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menu.onClick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}