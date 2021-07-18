// Selections
const form = document.querySelector(".search-container");
const btnSearch = document.querySelector("#search-btn");
const inputSearch = document.querySelector(".search-input");

btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    inputSearch.classList.toggle("search-input--active");
    btnSearch.classList.toggle("search-btn--active");
    inputSearch.focus();

    if (inputSearch.value !== "") {
        window.open(`https://www.google.com/search?q=${inputSearch.value}`);
        inputSearch.value = "";
        // form.submit();
    }
    // if (inputSearch.classList.contains("search-input--active")) {
    //     inputSearch.focus();
    // } else {
    //     btnSearch.focus();
    // }
});
