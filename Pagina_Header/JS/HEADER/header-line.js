// Inicializar Variables
var arrAds = [
    "Envíos gratis desde $150.000",
    "Edición especial de semana santa &#128519;",
    "Hasta 50% de descuento"
];
var lineText = document.querySelector(".line_Text");
const Wtime = 4000;

// Ciclo For
looper();
function looper() {
    for (let i = 0; i <= arrAds.length; i++) {
        task(i);
    };
};

// Función para añadir delay en el ciclo for
function task(i) {
    setTimeout(() => {
        if (i < arrAds.length) {
            lineText.innerHTML = arrAds[i];
        } else {
            looper();
        };
    }, Wtime * i);
};

// Referencias: https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/