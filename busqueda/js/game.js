// El calco ahora tiene coordenadas fijas
const TARGET_X = 653; // Coordenada X fija
const TARGET_Y = 22.5; // Coordenada Y fija

// No necesitamos la función getRandomNumber para el calco
let target = {
    x: TARGET_X,
    y: TARGET_Y
};

// Mantenemos el resto del código igual
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

// Puedes aumentar el valor de "acierto" aquí (por ejemplo, 50 píxeles en vez de 20)
const SUCCESS_RADIUS = 10;

$map.addEventListener('click', function(e) {
    console.log('click');
    clicks++;
    let distance = getDistance(e, target); // Calcula la distancia entre el click y el calco
    let distanceHint = getDistanceHint(distance); // Obtiene una pista según la distancia
    $distance.innerHTML = `<h1>${distanceHint}</h1>`; // Muestra la pista

    // Si la distancia es menor que el radio de éxito (por ejemplo, 50 píxeles), el calco ha sido encontrado
    if (distance < SUCCESS_RADIUS) {
        alert(`¡Vayaa! Con que aquí estaba, los has encontrado en ${clicks} clics!`);
        redirigir();
    }
});

function redirigir() {
    // Redirige a otra página dentro del mismo proyecto
    window.location.href = "../fin.html";
}