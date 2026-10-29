
const targetDate = new Date(2027, 3, 24, 0, 0, 0);

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const motivationElement = document.getElementById("motivation");
const messageElement = document.querySelector(".closing");
const eyebrowElement = document.querySelector(".eyebrow");

const motivations = [
    "Has llegado hasta aquí por tu esfuerzo. No olvides todo lo que has superado para conseguirlo.",
    "Detrás de cada paso hay horas de trabajo, aprendizaje, paciencia y dedicación. Todo eso forma parte de ti.",
    "No tienes que poder con todo cada día. Descansar también es una forma de seguir adelante.",
    "Recuerda a aquella persona que empezó este camino con ilusión. Mira todo lo que ha avanzado.",
    "La incertidumbre no borra tu esfuerzo ni todo lo que has aprendido durante este proceso.",
    "Un mal día no define tu camino. Date permiso para respirar y volver a intentarlo mañana.",
    "Has invertido tiempo, energía y corazón en tu vocación. Siéntete orgulloso del camino recorrido.",
    "Paso a paso, día a día. No necesitas resolver hoy todas las preocupaciones de mañana.",
    "Ser docente también es aprender, crecer y levantarse. Todo este proceso te está acompañando en ello.",
    "Confía en lo que has trabajado. No puedes controlar la espera, pero sí cuidar de ti mientras llega el día.",
    "No eres solamente un resultado. Eres todo lo que has aprendido, compartido y superado para llegar hasta aquí.",
    "Ojalá pronto puedas mirar atrás y sentir la tranquilidad de haber dado lo mejor de ti.",
    "La plaza es el objetivo, pero tu vocación, tu esfuerzo y tu crecimiento también tienen valor.",
    "Queda un día menos de espera. No te olvides de vivir y disfrutar también del presente.",
    "Pase lo que pase, mereces reconocer todo el trabajo que hay detrás de este sueño."
];

let motivationIndex = 0;

function updateCountdown() {
    const difference = targetDate.getTime() - Date.now();

    if (difference <= 0) {
        daysElement.textContent = "000";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        eyebrowElement.textContent = "✦ HA LLEGADO EL DÍA ✦";
        motivationElement.textContent =
            "Hoy llega el momento de conocer el resultado de esta etapa. Respira hondo, date crédito por el camino recorrido y afronta este día con serenidad.";
        messageElement.textContent =
            "Sea cual sea la noticia, recuerda todo lo que has avanzado. 💜";

        return;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysElement.textContent = String(days).padStart(3, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

function changeMotivation() {
    motivationElement.style.opacity = "0";

    setTimeout(() => {
        motivationIndex = (motivationIndex + 1) % motivations.length;
        motivationElement.textContent = motivations[motivationIndex];
        motivationElement.style.opacity = "1";
    }, 300);
}

updateCountdown();

const countdownInterval = setInterval(() => {
    updateCountdown();

    if (targetDate.getTime() <= Date.now()) {
        clearInterval(countdownInterval);
    }
}, 1000);

setInterval(changeMotivation, 12000);
