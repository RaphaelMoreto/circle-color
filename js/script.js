//SELECIONA O PRIMEIRO ELEMENTO COM O SELECTOR CSS/JS QUE ESTIVER NO PARÊNTESES
const circle = document.querySelector(".circle");

const rgbRed = document.getElementById("rgb-red");
const rgbGreen = document.getElementById("rgb-green");
const rgbBlue = document.getElementById("rgb-blue");
const hexColor = document.getElementById("hex-color");
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

function updateBackGround() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;
    const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.background = backgroundColor;
}

function updateHexColor() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;

    const hex = rgbToHex(red, green, blue);
    hexColor.textContent = hex;
}

function rgbToHex(r, g, b) {
    const toHex = (value) => {
        const hex = parseInt(value).toString(16);

        //ADICIONA UM ZERO A ESQUERDA SE A STRING TIVER APENAS UM CARACTERE
        return hex.padStart(2, "0");
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

//ADICIONA UM OUVINTE NO ELEMENTO INPUT E EXECUTA A FUNÇÃO QUANDO ACONTECE A INTERAÇÃO
redInput.addEventListener("input", () => {
    updateCircleColor();
    updateNumbersValue();
    updateHexColor()
});

greenInput.addEventListener("input", () => {
    updateCircleColor();
    updateNumbersValue();
    updateHexColor()
});

blueInput.addEventListener("input", () => {
    updateCircleColor();
    updateNumbersValue();
    updateHexColor()
});