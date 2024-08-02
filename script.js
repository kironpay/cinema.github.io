function getEdad() {
    return parseInt(document.getElementById("Edad").value);
}

function Drama() {
    let edad = getEdad();
    let recomendacion = document.getElementById("recomendacion");
    switch (true) {
        case (edad < 13):
            recomendacion.textContent = "Casa blanca";
            break;
        case (edad >= 13 && edad <= 15):
            recomendacion.textContent = "The Shawshank Redemption";
            break;
        case (edad >= 16):
            recomendacion.textContent = "Taxi Driver";
            break;
    }
}

function Comedia() {
    let edad = getEdad();
    let recomendacion = document.getElementById("recomendacion");
    switch (true) {
        case (edad < 13):
            recomendacion.textContent = "Back to the Future";
            break;
        case (edad >= 13 && edad <= 15):
            recomendacion.textContent = "The Truman Show";
            break;
        case (edad >= 16):
            recomendacion.textContent = "The Wolf of Wall Street";
            break;
    }
}

function Musical() {
    let edad = getEdad();
    let recomendacion = document.getElementById("recomendacion");
    switch (true) {
        case (edad < 13):
            recomendacion.textContent = "La La Land";
            break;
        case (edad >= 13 && edad <= 15):
            recomendacion.textContent = "Les Miserables";
            break;
        case (edad >= 16):
            recomendacion.textContent = "The Rocky Horror Picture Show";
            break;
    }
}

function Crimen() {
    let edad = getEdad();
    let recomendacion = document.getElementById("recomendacion");
    switch (true) {
        case (edad < 13):
            recomendacion.textContent = "No hay opciones para esta edad";
            break;
        case (edad >= 13 && edad <= 15):
            recomendacion.textContent = "El Secreto de sus Ojos";
            break;
        case (edad >= 16):
            recomendacion.textContent = "The Godfather";
            break;
    }
}
