// assegnazione costanti

const navBarMenu = document.querySelector('.header-right');
const hamburgerMenu = document.querySelector('.hamburger-menu');

//funzione click
//open hamburger menu

navBarMenu.addEventListener('click',
    function(){
        navBarMenu.classList.toggle("active");
        hamburgerMenu.classList.toggle("active");
    }
);

