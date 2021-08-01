const audios = document.querySelectorAll(".section--4 audio");
const btnBox = document.querySelector(".section--4 #buttons");

// Solution I
// Create and add buttons to btnBox
audios.forEach((audio) => {
    let btn = document.createElement("button");
    btn.className = "btn--audio";
    btn.innerText = audio.id;
    btn.dataset.sound = audio.id;
    btnBox.append(btn);

    btn.addEventListener("click", () => {
        stopSounds();
        document.querySelector(`#${btn.dataset.sound}`).play();
    });
});

// Add event listener to btns to play sounds
/* const btns = document.querySelectorAll(".section--4 #buttons .btn--audio");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        stopSounds();
        document.querySelector(`#${btn.dataset.sound}`).play();
    });
});
 */
function stopSounds() {
    audios.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
    });
}
