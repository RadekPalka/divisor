const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput= document.querySelector("#second-number");
const form = document.querySelector("form");

const submitForm = async e=>{

    //e.preventDefault();

    if (!firstNumberInput.value || !secondNumberInput.value){
        return alert("Musisz wypełnić formularz");
    }
    const firstNumber = +firstNumberInput.value;
    const secondNumber = +secondNumberInput.value;
    if (secondNumber >= firstNumber || secondNumber <2 || firstNumber < 2){
        return alert("Weż się postaraj");
    }
    const resMessage = firstNumber % secondNumber ?
        `Liczba ${secondNumber} nie jest dzielnikiem liczby ${firstNumber}`:
        `Liczba ${secondNumber} jest dzielnikiem liczby ${firstNumber}`
    const result = await fetch("/calc/check", {
        method: 'POST',
        body: JSON.stringify({
            resMessage
        }),
        headers: {
            "Content-Type": 'application/json',
        }
            })
    // const data= await result.json();
    // console.log(data)
}

form.addEventListener("submit", e => submitForm(e));
