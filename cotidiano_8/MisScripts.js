//Aplicar Programación Orientada a Objetos (POO) para modelar animales con herencia y métodos personalizados.
//Actividades
//Cada subclase:
//4. Crear instancias:
//o perro1, gato1, conejo1, y agruparlos en un array animales.
//5. Implementar mostrarAnimales():
//o Recorre el array animales.
//o Crea un <li> con el resultado de .informacion() para cada animal.
//o Lo inserta en la lista HTML.
class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    informacio() {
        return `Nombre ${this.nombre} Peso ${this.peso} Edad ${this.edad}`
    }
}
class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad)
        this._raza = raza;
    }
    get raza() {
        return this._raza;
    }
    set raza(nuevaRaza) {
        this._raza = nuevaRaza
    }
    informacio() {
        return `Nombre ${this.nombre} Peso ${this.peso} Edad ${this.edad} raza ${this.raza}`
    }
}
let perro1 = new Perro("zaguate", 32, 5, "pastor belga");
class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad)
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(nuevaSexo) {
        this._sexo = nuevaSexo
    }
    informacio() {
        return `Nombre ${this.nombre} Peso ${this.peso} Edad ${this.edad} sexo ${this.sexo}`
    }
}
let gato1 = new Gato("Misifus", 15, 2, "Gato Egipcio");
class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad)
        this._color = color;
    }
    get color() {
        return this._color;
    }
    set color(nuevocolor) {
        this._color = nuevocolor
    }
    informacio() {
        return `Nombre ${this.nombre} Peso ${this.peso} Edad ${this.edad} color ${this.color} `
    }
}
let conejo1 = new Conejo("Rabbit", 10, 1, "Normal");

document.getElementById("listaAnimales")

let array1 = [perro1, gato1, conejo1];

function mostrarAnimales() {
    const lista = document.getElementById("listaAnimales");
    lista.innerHTML = "";

    for (let h = 0; h < array1.length; h++) {
        let li = document.createElement("li");
        li.textContent = array1[h].informacion();
        lista.appendChild(li);
    }
}