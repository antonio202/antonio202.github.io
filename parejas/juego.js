let vectorElementos = [{ 'name': 'drive', 'img': 'img/drive.png' },
    { 'name': 'site', 'img': 'img/site.png' },
    { 'name': 'configuracion', 'img': 'img/configuracion.png' },
    { 'name': 'pagina', 'img': 'img/pagina.png' },
    { 'name': 'compartir', 'img': 'img/compartir.png' },
    { 'name': 'cuadrotexto', 'img': 'img/cuadrotexto.png' },
    { 'name': 'imagen', 'img': 'img/imagen.png' },
    { 'name': 'youtube', 'img': 'img/youtube.png' },
    { 'name': 'calendar', 'img': 'img/calendar.png' }
];

let tableroJuego = vectorElementos.concat(vectorElementos);
let elemento1;
let elemento2;
let elementosSeleccionados;
let contador = 0;
let cont_aciertos = 0;

let i = 0;
while (i < vectorElementos.length) {
    let random = Math.round(Math.random() * vectorElementos.length - 1);
    random += vectorElementos.length;
    let aux = tableroJuego[random];
    tableroJuego[random] = tableroJuego[i];
    tableroJuego[i] = aux;
    i++;
}

let seccion = document.createElement('section');
seccion.setAttribute('class', 'grid');
document.getElementById('juego').appendChild(seccion);
for (let i = 0; i < tableroJuego.length; i++) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('name', tableroJuego[i].name);
    seccion.appendChild(card);

    let front = document.createElement('div');
    front.setAttribute('class', 'front');
    //front.setAttribute('onclick','procesarClick(this)');
    front.addEventListener('click', procesarClick);
    card.appendChild(front);

    let back = document.createElement('div');
    back.setAttribute('class', 'back');
    back.setAttribute('style', 'background-image: url("' + tableroJuego[i].img + '");');
    card.appendChild(back);
}

function procesarClick() {
    let hijo = this;
    let padre = hijo.parentNode;
    let i = 0;

    if (padre.className === "selected" || padre.className === "match") {
        return;
    }

    if (contador === 0) {
        padre.setAttribute('class', 'card selected');
        elemento1 = hijo;
        contador++;
    } else if (contador === 1) {
        padre.setAttribute('class', 'card selected');
        elemento2 = hijo;
        contador++;
    }
    if (contador === 2) {
        if (elemento1.parentNode.getAttribute('name') === elemento2.parentNode.getAttribute('name')) {
            document.getElementById('mensajeAcierto').style.display = 'block';
            let texto = ""
            if (elemento2.parentNode.getAttribute('name') == 'calendar') {
                texto = "Este es el icono de Google Calendar, lo puedes agregar a los Google Sites.";
            } else if (elemento2.parentNode.getAttribute('name') == 'compartir') {
                texto = "Este es el icono para compartir tu Google Site.";
            } else if (elemento2.parentNode.getAttribute('name') == 'configuracion') {
                texto = "Este es el icono para configurar tu Google Site.";
            } else if (elemento2.parentNode.getAttribute('name') == 'cuadrotexto') {
                texto = "Este es el icono para agregar cuadros de texto a tu Google Site.";
            } else if (elemento2.parentNode.getAttribute('name') == 'drive') {
                texto = "Este es el icono de Google Drive, que almacena elementos que se podrán agregar al Google Site.";
            } else if (elemento2.parentNode.getAttribute('name') == 'imagen') {
                texto = "Este es el icono para agregar imágenes al Google Site.";
            } else if (elemento2.parentNode.getAttribute('name') == 'pagina') {
                texto = "Este es el icono que usa Google Sites para las páginas.";
            } else if (elemento2.parentNode.getAttribute('name') == 'site') {
                texto = "Este es el icono de Google Sites.";
            } else if (elemento2.parentNode.getAttribute('name') == 'youtube') {
                texto = "Este es el icono de YouTube, con el que podrás agregar vídeos a tu Google Site.";
            }
            cont_aciertos++;
            setTimeout(match, 3000);
            if (cont_aciertos >= 9) {
                document.getElementById('continuar').style.display = "inline";
            }
            setTimeout(() => {
                alert(texto);
            }, 500);
        } else {
            document.getElementById('mensajeError').style.display = 'block';
            setTimeout(resetGuesses, 1000);
        }
    }
}

function match() {
    let items = document.getElementsByClassName('selected');
    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('class', 'card selected match');
    }
    document.getElementById('mensajeAcierto').style.display = 'none';
    let tam = items.length;
    for (let i = 0; i < tam; i++) {
        items[0].classList.remove('selected');
    }
    contador = 0;
    elemento1 = null;
    elemento2 = null;
}

function resetGuesses() {
    let items = document.getElementsByClassName('selected');
    let tam = items.length;
    for (let i = 0; i < tam; i++) {
        items[0].classList.remove('selected');
    }
    document.getElementById('mensajeError').style.display = 'none';
    contador = 0;
    elemento1 = null;
    elemento2 = null;
}