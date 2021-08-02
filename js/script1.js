// Selections

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

let step = 0;

function btnDisable() {
    if (step >= 3) {
        btnNext.disabled = true;
        btnNext.classList.add("btn--disabled");
    } else if (step <= 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add("btn--disabled");
    } else {
        btnNext.disabled = false;
        btnPrev.disabled = false;

        btnPrev.classList.remove("btn--disabled");
        btnNext.classList.remove("btn--disabled");
    }
}

btnNext.addEventListener("click", () => {
    step++;
    document.querySelector(`.bridge-${step}`).classList.add("bridge--active");
    document.querySelector(`.step-${step}`).classList.add("step--active");
    btnDisable();
});

btnPrev.addEventListener("click", () => {
    document
        .querySelector(`.bridge-${step}`)
        .classList.remove("bridge--active");
    document.querySelector(`.step-${step}`).classList.remove("step--active");
    step--;
    btnDisable();
});

btnDisable();
