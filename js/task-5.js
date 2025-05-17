function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 
const lisenChange = document.querySelector(".btnChangeColor");
const spanAddColor = document.querySelector(".color");
const body = document.body;

lisenChange.addEventListener("click", clickBtnChangeColor);

function clickBtnChangeColor() {
  spanAddColor.textContent = `${getRandomHexColor()}`;
  body.style.backgroundColor = `${getRandomHexColor()}`;

}