const enterYouName = document.querySelector(".inputName");
const titleName = document.querySelector("#name-output");
enterYouName.addEventListener("input", handleClick);

function handleClick(event) {
    const valueName = (event.target.value);
    titleName.textContent = valueName;
    
    if (valueName.trim() === "") {
        titleName.textContent = "Anonymous";
    }
    
}

