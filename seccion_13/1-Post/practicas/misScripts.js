async function agregarRegistro(nombre, datos) {
    try {
        let respuesta = await fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nombre,
                data: datos,
            }),
        });

        const resultado = await respuesta.json();
        console.log("Registro agregado:", resultado);
    } catch (error) {
        console.error("Error al agregar el registro:", error);
    }
}
agregarRegistro("Santiago Vega Jmz", {
    edad: 16,
    email: "thiagorex1702@gmail.com",
    ciudad: "Alajuela, San Rafael",
});