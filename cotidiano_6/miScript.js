let Array = [];

let Expediente = document.getElementById("Expediente").value;
let Nombre = document.getElementById("Nombre").value;
let Apellido = document.getElementById("Apellido").value;
let Fecha = document.getElementById("Fecha").value;
let Cargo = document.getElementById("Cargo").value;

function Empleado(expediente, nombre, apellido, nacimiento, cargo) {
    this.Expediente = Expediente;
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Fecha = Fecha;
    this.Cargo = Cargo;
}
 
function agregarEmpleado() {
    
}