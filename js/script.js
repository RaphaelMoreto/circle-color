//SELECIONA O PRIMEIRO ELEMENTO COM O SELECTOR CSS "CIRCLE"
const circle = document.querySelector(".circle");
const rgbRed = document.querySelector("#rgb-red");
const rgbGreen = document.querySelector("#rgb-green");
const rgbBlue = document.querySelector("#rgb-blue");

const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");

function updateCircleColor() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;
    const color = `rgb(${red}, ${green}, ${blue})`;

    circle.style.backgroundColor = color;
};

function updateNumbersValue() {
    rgbRed.textContent = redInput.value;
    rgbGreen.textContent = greenInput.value;
    rgbBlue.textContent = blue.value;
}

//ADICIONA UM OUVINTE NO ELEMENTO INPUT E EXECUTA A FUNÇÃO QUANDO ACONTECE A INTERAÇÃO
redInput.addEventListener("input", () => {
    updateCircleColor();
    updateNumbersValue();
});

greenInput.addEventListener("input", () => {
    updateCircleColor();
    updateNumbersValue();
});

blueInput.addEventListener("input", () => {
    updateCircleColor();
    updateNumbersValue();
});

function updateBackGround() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;
    const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.background = backgroundColor;
}