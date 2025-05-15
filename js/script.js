"use strict"

// navbar toggle in mobile

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

// Ensure navbar and toggler are deactivated by default
$navbar.classList.remove("active");
$navToggler.classList.remove("active");

$navToggler.addEventListener("click", () => {
  $navbar.classList.toggle("active");
  $navToggler.classList.toggle("active"); // ✅ toggle on button too
});



// Header scroll state

const /*{NodeElement} */ $header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});


// Add to favorite button toggle  

const $toggleBtns=document.querySelectorAll("[data-toggle-btn]");
$toggleBtns.forEach($toggleBtn=>{
  $toggleBtn.addEventListener("click",()=>{
$toggleBtn.classList.toggle("active");
  });
});