function Pelicula(genero) {
    let Edad = document.getElementById("Edad").value;
    let Recomendaciones = document.getElementById("Recomendaciones");
    let Pelicula = "";
    if(!document.getElementById("Edad").value) { 
        alert("Por favor, ingrese tu edad antes de continuar.");
        return;
    }
    switch (genero) {
        case 'Drama':
            if (Edad < 13) {
                Pelicula = "Casa blanca"
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "The Shawshank Redemption";
                } else
                    if (Edad >= 16) {
                        Pelicula = "Taxi Driver";
                    }
            break;

            case 'Comedia':
            if (Edad < 13) {
                Pelicula = "Back to the future"
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "The truman show";
                } else
                    if (Edad >= 16) {
                        Pelicula = "The wolf of wall street";
                    }
            break;

            case 'Musical':
            if (Edad < 13) {
                Pelicula = "La La Land"
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "Les miserables";
                } else
                    if (Edad >= 16) {
                        Pelicula = "the rocky horror picture show";
                    }
            break;

            case 'Crimen':
            if (Edad < 13) {
                Pelicula = "no hay opciones para estas edades"
            } else
                if (Edad >= 13 && Edad <= 15) {
                    Pelicula = "El secreto de sus ojos";
                } else
                    if (Edad >= 16) {
                        Pelicula = "the godfather";
                    }
            break;
            

    }
    Recomendaciones.textContent = "La recomendacion sera: " + Pelicula;
}      