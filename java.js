const menuemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
const menuhambicono = document.querySelector(".menu");
const mobilemenu = document.querySelector(".mobile-menu");
const menucarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");




menuemail.addEventListener("click",toggledesktopmenu);
menuhambicono.addEventListener("click",togglemobilemenu);
menucarrito.addEventListener("click",togglecarrito);


function toggledesktopmenu(){

    desktopmenu.classList.toggle("inactive");
}

function togglemobilemenu(){

    mobilemenu.classList.toggle("inactive");
}
function togglecarrito(){

    aside.classList.toggle("inactive");
}