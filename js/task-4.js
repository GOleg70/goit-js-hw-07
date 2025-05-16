const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);




function handleSubmit(event){
    event.preventDefault();
    const formElements = event.target.elements;
    if (formElements.email.value.trim() === ""
        ||
        formElements.password.value.trim() === "")
    {
    alert('All form fields must be filled in');
    }
    else {
         const inputValue = {
          email: formElements.email.value.trim(),
          password: formElements.password.value.trim()
         } 
         form.reset();
         console.log(inputValue);
    }
}


