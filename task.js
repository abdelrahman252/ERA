// const navToggle = document.querySelector(".nav-toggle");
// const links = document.querySelector(".links");

// navToggle.addEventListener("click", function() {
//     if (links.classList.contains("show-links")) {
//         links.classList.remove("show-links");
//     } else {
//         links.classList.add("show-links");
//     }
// })
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById('close-menu');
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
});
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
});



const slides = document.querySelectorAll(".mySlides");
const btns = document.querySelectorAll(".bttn");
btns.forEach((btn, index) => {
    btns[index].addEventListener("click", function() {
        slides.forEach(function(slide, index) {
            slides[index].classList.add("none");
        });
        for (i = 0; i < slides.length; i++) {
            btns[i].classList.remove("active");
        }
        btns[index].classList.add("active");
        slides[index].classList.remove("none");
    });
});


let s = 0
const auto = (s) => {
    setTimeout(function() {
        s++
        if (s >= 3) {
            s = 0;
        }
        slides.forEach(function(slide, index) {
            slides[index].classList.add("none");
        });
        for (i = 0; i < slides.length; i++) {
            btns[i].classList.remove("active");
        }
        btns[s].classList.add("active");
        slides[s].classList.remove("none");
        auto(s)
    }, 4000);
}
auto(s);





let effectWriter = document.querySelector('.moving');

let x = ["sit amet", "sit amet", "sit amet", "sit amet"];
let y = 0;
let z = 0;

let inter = setInterval(() => {
    effectWriter.innerHTML += x[z][y];
    y++;
    if (y > x[z].length) {
        effectWriter.innerHTML = "";
        y = 0;
        if (z < x.length - 1) {
            z++;
        } else {
            z = 0;
        }
    }
}, 400);