const numero1 = document.getElementById("Put1");
const numero2 = document.getElementById("put2");
function sumar(){
    let numero1 = document.getElementById("Put1");
    let numero2 = document.getElementById("put2");
    let resultado = parseFloat(numero1.value) + parseFloat(numero2.value);
    document.getElementById("resultado").textContent = ` ${resultado}`;
}

function restar(){
    let numero1 = document.getElementById("Put1");
    let numero2 = document.getElementById("put2");
    let resultado = parseFloat(numero1.value) - parseFloat(numero2.value);
    document.getElementById("resultado").textContent = `${resultado}`;
}

function dividir(){
    let numero1 = document.getElementById("Put1");
    let numero2 = document.getElementById("put2");
    if (numero2.value == "0") {
        document.getElementById("resultado").textContent = "Error: División por cero";
    } else {
        let resultado = parseFloat(numero1.value) / parseFloat(numero2.value);
        document.getElementById("resultado").textContent = ` ${resultado}`;
    }
}

function multiplicar(){
    let numero1 = document.getElementById("Put1");
    let numero2 = document.getElementById("put2");
    let resultado = parseFloat(numero1.value) * parseFloat(numero2.value);
    document.getElementById("resultado").textContent = ` ${resultado}`;
}

function raiz() {
    let numero1 = document.getElementById("Put1");
    if (numero1.value !== "") {
        let resultado = Math.sqrt(parseFloat(numero1.value));
        document.getElementById("resultado").textContent = ` ${resultado}`;
    } else {
        alert("Ingresa un número en el primer campo");
    }
}

function potencia() {
    let numero1 = document.getElementById("Put1");
    let numero2 = document.getElementById("put2");
    if (numero1.value !== "" && numero2.value !== "") {
        let resultado = Math.pow(parseFloat(numero1.value), parseFloat(numero2.value));
        document.getElementById("resultado").textContent = ` ${resultado}`;
    } else {
        alert("Por favor, ingresa ambos números");
    }
}

function absoluto() {
    let numero1 = document.getElementById("Put1");
    if (numero1.value !== "") {
        let resultado = Math.abs(parseFloat(numero1.value));
        document.getElementById("resultado").textContent = ` ${resultado}`;
    } else {
        alert("Por favor, ingresa un número en el primer campo");
    }
}


function random() {
    let resultado = Math.floor(Math.random() * 100) + 1; 
    document.getElementById("resultado").textContent = ` ${resultado}`;
}

function redondear() {
    let numero1 = document.getElementById("Put1");
    if (numero1.value !== "") {
        let resultado = Math.round(parseFloat(numero1.value));
        document.getElementById("resultado").textContent = ` ${resultado}`;
    } else {
        alert("Por favor, ingresa un número en el primer campo");
    }
}

function redondearAbajo() {
    let numero1 = document.getElementById("Put1");
    if (numero1.value !== "") {
        let resultado = Math.floor(parseFloat(numero1.value));
        document.getElementById("resultado").textContent = ` ${resultado}`;
    } else {
        alert("Por favor, ingresa un número en el primer campo");
    }
}

function redondearArriba() {
    let numero1 = document.getElementById("Put1");
    if (numero1.value !== "") {
        let resultado = Math.ceil(parseFloat(numero1.value));
        document.getElementById("resultado").textContent = ` ${resultado}`;
    } else {
        alert("Por favor, ingresa un número en el primer campo");
    }

}