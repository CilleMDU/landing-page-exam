"use strict";

// Everything is coded for exam purposes. Nothing is pre exam

document.addEventListener("DOMContentLoaded", () => {

const rightSections = document.querySelectorAll(".animate");

// Scroll animation code. Observer triggers when item is 30% within view
// InterSectionObserver observes when a section is overlapping with the viewpoint

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