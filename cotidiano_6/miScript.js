let empleados = [];

function Empleado(Expediente, Nombre, Apellido, Fecha, Cargo) {
    this.Expediente = Expediente;
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Fecha = Fecha;
    this.Cargo = Cargo;
}

function AgregarEmpleado() {
    let Expediente = document.getElementById("Expediente").value;
    let Nombre = document.getElementById("Nombre").value;
    let Apellido = document.getElementById("Apellido").value;
    let Fecha = document.getElementById("Fecha").value;
    let Cargo = document.getElementById("Cargo").value;

    if (Expediente && Nombre && Apellido && Fecha && Cargo) {
        let nuevoEmpleado = new Empleado(Expediente, Nombre, Apellido, Fecha, Cargo);
        empleados.push(nuevoEmpleado);

        document.getElementById("Expediente").value = "";
        document.getElementById("Nombre").value = "";
        document.getElementById("Apellido").value = "";
        document.getElementById("Fecha").value = "";
        document.getElementById("Cargo").value = "";
    }
}

function mostrarEmpleados() {
    let lista = "Empleados registrados:\n";
    for (let o = 0; o < empleados.length; o++) {
        lista += `${o + 1}. ${empleados[o].Nombre} ${empleados[o].Apellido} - ${empleados[o].Cargo}\n`;
    }
    alert(lista);
}