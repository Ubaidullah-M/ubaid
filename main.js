let menu = document.querySelector('#menu');
let close = document.querySelector('#close-menu');
let nav = document.querySelector('#nav');
let lists = document.querySelector('header ul');
let navLinks = document.querySelector('#nav-links').querySelectorAll('li');
let copyRight = document.querySelector("#copy-right")

// Toggling humberger menu on and off

copyRight.innerText = new Date().getFullYear()

menu.addEventListener('click', () => {
    nav.classList.toggle("hidden")
})

close.addEventListener('click', () => {
    nav.classList.toggle("hidden")

})

// Removing nav when clicking menu on small screen.

navLinks.forEach((nav) => {
    nav.addEventListener("click", closesMenu)
})

function closesMenu() {
    nav.classList.toggle("hidden")
}

// About me section

let readMore = document.querySelector('#read-more');
let about = document.querySelector('#about')

readMore.addEventListener('click', function(e) {
    e.preventDefault()
    let docMore = document.querySelector('.see-more');
    if (readMore.innerText === "Read more") {
        readMore.innerText = "Read less";
        docMore.classList.remove('hide-me');
    } else {
        readMore.innerText = "Read more";
        docMore.classList.add('hide-me');
    }
})