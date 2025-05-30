let menu = document.querySelector('#menu');
let close = document.querySelector('#close-menu');
let nav = document.querySelector('#nav');
let lists = document.querySelector('header ul');
let navLinks = document.querySelector('#nav-links').querySelectorAll('li');
let copyRight = document.querySelector("#copy-right");
let loader = document.querySelector(".my-loading")
let responseTheme = document.querySelector(".message-note")
let message = document.querySelector("#note")
let closeBtn = document.querySelector("#close-message")
const myForm = document.querySelector("#my-form")
const animationCycle = document.querySelector(".load-cycle")
let projectBtns = document.querySelectorAll("#portfolio-btn button")
let data // this will be assigned value after form submission as a response
let removeAnimation
const loadAnimation = document.querySelectorAll(".load-animation")


// Toggling humberger menu on and off
copyRight.innerText = new Date().getFullYear()

// fetching data for the portfolio project
const template = document.querySelector("#template")
const container = document.querySelector("#portfolio")


async function getTemplate() {
  const template = document.querySelector("#template");
  const container = document.querySelector("#portfolio"); // your actual container

  const response = await fetch("https://portfolio-serve-uei3.onrender.com");
  const json = await response.json();
  const data = json.data;
  removeAnimation = json.success
  if (removeAnimation) {
    loadAnimation.forEach(item => {
        item.classList.toggle('hidden')
    })
  }

  data.forEach(item => {
    const clone = template.content.cloneNode(true);

    const portfolioLink = clone.querySelector(".portfolio-link");
    portfolioLink.href = item.link;
    portfolioLink.dataset.filter = item.tech;
    portfolioLink.dataset.id = item._id;

    const cardImage = clone.querySelector(".card-image");
    cardImage.src = item.file;

    container.appendChild(clone);
  });
}

getTemplate();



// opening & closing humberger menu
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


// fetching data $ sending a form data to database
async function submitData() {
    const ourPromise = await fetch("https://portfolio-serve-uei3.onrender.com/contact", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value,
            timestamp: new Date()
        })
    })
    const ourData = await ourPromise.json()
    data = await ourData
}


// form submission events
myForm.addEventListener('submit', async function(e) {
    e.preventDefault()
    loader.classList.toggle("hidden")
    await submitData()
    if (data.success) {
        animationCycle.classList.toggle("hidden")
        responseTheme.classList.toggle("hidden")
        message.innerText = `${data.message}`
    
    } else {
        animationCycle.classList.toggle("hidden")
        responseTheme.classList.toggle("hidden")
        message.innerText = `${data.message}`
    }
})


// closing the form submission wait
closeBtn.addEventListener("click", function() {
    loader.classList.toggle("hidden")
    animationCycle.classList.toggle("hidden")
     responseTheme.classList.toggle("hidden")
     if (data.success) {
        myForm.reset()
        document.querySelector("#name").focus()
     }
})

// changing the project buttons color
projectBtns.forEach((btn) => {
    btn.addEventListener('click', e => {
        projectBtns.forEach(b => b.classList.remove("active"))
        btn.classList.add("active")
        const myFilter = document.querySelectorAll(".portfolio-link")
        myFilter.forEach((getFilter)=> {
            if (btn.dataset.filter == getFilter.dataset.filter || btn.dataset.filter == "all") {
                getFilter.style.display = "grid"
            } else {
                getFilter.style.display = "none"
            }
        })
        
    })
})


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
