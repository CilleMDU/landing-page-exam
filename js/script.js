"use strict";

// Alt er kodet til eksamen og ikke til den originale opgave

// DOMContentLoaded for at sikre at DOM er loadet før script kører

document.addEventListener("DOMContentLoaded", () => {

  
const rightSections = document.querySelectorAll(".animate");

// Scroll animation kode højre

const observerRight = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
      else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  {
    threshold: 0.3
  }
);

rightSections.forEach((section) => observerRight.observe(section));

// Scroll animation kode venstre

const leftSections = document.querySelectorAll(".animate-left");

const observerLeft = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

leftSections.forEach((section) => observerLeft.observe(section));


// Scroll up knap kode

const scrollUp = document.getElementById("upBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    scrollUp.classList.add("show");
  } else {
    scrollUp.classList.remove("show");
  }
});

scrollUp.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

});