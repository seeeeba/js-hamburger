// assegnazione costanti

const navBarMenu = document.querySelector('.header-right');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navClose = document.querySelector('.hamburger-menu .close')

//funzione click
//open hamburger menu

navBarMenu.addEventListener('click',
    function(){
        navBarMenu.classList.toggle("active");
        hamburgerMenu.classList.toggle("active");
    }
);

//close hamburger menu

navClose.addEventListener("click", 
    function() {
        navClose.classList.toggle("active");
        hamburgerMenu.classList.toggle("active");
    }
);