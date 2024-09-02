function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    let divs = "";
    let divSize = 30;

    for (let idx = 1; idx <= amount; idx++) {
        const style = `style="width: ${divSize}px; height: ${divSize}px; background: ${getRandomHexColor()};"`;
        divs += `<div ${style}></div>`;
        divSize += 10;
    }

    input.value = "";
    destroyBoxes();
    boxes.insertAdjacentHTML("beforeend", divs);
}

function destroyBoxes() {
    boxes.innerHTML = "";
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

document.querySelector("button[data-create]").addEventListener("click", () => {
    const amount = input.value;

    if (parseInt(amount) && amount >= 1 && amount <= 100) {
        createBoxes(amount);
    }
});

document.querySelector("button[data-destroy]").addEventListener("click", () => {
    input.value = "";
    destroyBoxes();
});
