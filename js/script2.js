// Selections
const btnSearch = document.querySelector("#search-btn");
const inputSearch = document.querySelector(".search-input");

btnSearch.addEventListener("click", () => {
    inputSearch.classList.toggle("search-input--active");
    btnSearch.classList.toggle("search-btn--active");
});
