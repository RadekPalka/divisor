const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput= document.querySelector("#second-number");
const form = document.querySelector("form");

const submitForm = e =>{

    e.preventDefault();

    if (!firstNumberInput.value || !secondNumberInput.value){
        alert("Musisz wypełnić formularz");
    }
    const firstNumber = +firstNumberInput.value;
    const secondNumber = +secondNumberInput.value;
    if (secondNumber >= firstNumber || secondNumber <3 || firstNumber < 3){
        alert("Weż się postaraj")
    }
}

form.addEventListener("submit", e => submitForm(e));
