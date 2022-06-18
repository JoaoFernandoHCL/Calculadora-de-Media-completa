
const $button = window.document.querySelector("button")
const $input = document.querySelector("input")
const $media = document.querySelector("#media")
const $aprovado = document.querySelector("#aprovado")
const $registros = document.querySelector("#registros")

let total = 0;
let qtdNotas = 0;
let media = 0;
let aprovado = "Não";

function handleClick(event) {
    event.preventDefault();

    const nota = Number($input.value);

    if (nota >= 0 && nota <= 10 && nota !==""){
        total = total + nota;
        qtdNotas = qtdNotas + 1;

        media = total / qtdNotas;
        
        
        if (media >= 7) {
            aprovado = "Sim";
        } else {
            aprovado = "Não";
        }

        $media.textContent = media.toFixed(2);
        $aprovado.textContent = aprovado;
        
        $registros.insertAdjacentHTML("beforeend", `<li>${nota}</li>`);

    }
}

$button.addEventListener("click", handleClick);