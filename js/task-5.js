function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 
const lisenChange = document.querySelector(".change-color");
const spanAddColor = document.querySelector(".color");
const body = document.body;

lisenChange.addEventListener("click", clickBtnChangeColor);

function clickBtnChangeColor() {
  const genColor = getRandomHexColor();
  spanAddColor.textContent = genColor;
  body.style.backgroundColor = genColor;

}  