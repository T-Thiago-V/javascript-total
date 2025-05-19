function Coche(marca, modelo, anio, titular, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.titular = titular;
    this.color = color;
}

Coche.prototype.verAutomovil = function () {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Año: ${this.anio}, Titular: ${this.titular}`;
};

let coche1 = new Coche("Nissan", "B13", 2012, "Yoshisuke Aikawa", "Rojo");
let coche2 = new Coche("Mercedes", "AMG", 2024, "Carls Benz", "Negro");
let coche3 = new Coche("Ferrari", "F40", 1987, "Henzo Ferrari", "Rojo");

let listaCoches = [coche1, coche2, coche3];

function mostrarRegistro() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < listaCoches.length; i++) {
        let itemlista = document.createElement("li");
        itemlista.textContent = listaCoches[i].verAutomovil();
        lista.appendChild(itemlista);
    }
}
