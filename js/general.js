function irAPalas(ruta){
    window.location.href = '../palas/'+ruta+'.html';
}

function irAPagina(nombre){
    if(nombre==='zapatillas'){
        window.location.href = '../equipamiento/zapatillas.html';
    }else{
        window.location.href = '../equipamiento/accesorios.html';
    }
}

function irAZapatillas(zapatilla){
    window.location.href = '../equipamiento/zapatillas/'+zapatilla+'.html';
}

function irAAccesorios(accesorio){
    window.location.href = '../equipamiento/accesorios/'+accesorio+'.html';
}
