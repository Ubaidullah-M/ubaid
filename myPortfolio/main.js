let menu = document.querySelector('#menu');
let closeMenu = document.querySelector('#close-menu');
let nav = document.querySelector('header nav');
let lists = document.querySelector('header ul');
let navLinks = document.querySelector('#nav-links').querySelectorAll('li');

// Toggling humberger menu on and off

menu.addEventListener('click', () => {
    nav.classList.add('nav')
})

closeMenu.addEventListener('click', () => {
    nav.classList.remove('nav')

})

// Removing nav when clicking menu on small screen.

for (i=0;i<navLinks.length;i++) {
    navLinks[i].addEventListener('click', closesMenu)
}

function closesMenu() {
    nav.classList.remove('nav')
}
