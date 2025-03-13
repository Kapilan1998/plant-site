/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
let navMenu = document.getElementById("nav-menu")
let navLink = document.querySelectorAll(".nav-link")
let hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-fill')
})

navLink.forEach(link =>{
    link.addEventListener("click",() =>{
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle('ri-close-large-fill');
    })
})

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/