const pages = document.querySelector(".pages");
const page1 = document.querySelector(".page--1");
const page2 = document.querySelector(".page--2");

page1.addEventListener("click", () => {
    pages.classList.toggle("pages--left");
});
