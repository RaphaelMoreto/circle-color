const circle = document.querySelector(".circle");
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

redInput.addEventListener("input", updateCircleColor);
greenInput.addEventListener("input", updateCircleColor);
blueInput.addEventListener("input", updateCircleColor);

function updateBackGround() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;
    const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.background = backgroundColor;
}