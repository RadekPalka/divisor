const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput= document.querySelector("#second-number");
const form = document.querySelector("form");

const submitForm = async e=>{

    e.preventDefault();

    if (!firstNumberInput.value || !secondNumberInput.value){
        return alert("Musisz wypełnić formularz");
    }
    const firstNumber = +firstNumberInput.value;
    const secondNumber = +secondNumberInput.value;
    if (secondNumber >= firstNumber || secondNumber <3 || firstNumber < 3){
        return alert("Weż się postaraj");
    }
    const result = await fetch("/calc/check", {
        method: 'POST',
        body: JSON.stringify({
            firstNumber,
            secondNumber,
        }),
        headers: {
            "Content-Type": 'application/json',
        }
            })
    const data= await result.json();
}

form.addEventListener("submit", e => submitForm(e));
