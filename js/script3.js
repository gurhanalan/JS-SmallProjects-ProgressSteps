const pages = document.querySelector(".pages");
const page1 = document.querySelector(".page--1");
const page2 = document.querySelector(".page--2");

page1.addEventListener("mouseover", () => {
    pages.classList.add("pages--left");
    pages.classList.remove("pages--right");
});
page2.addEventListener("mouseover", () => {
    pages.classList.remove("pages--left");
    pages.classList.add("pages--right");
});
