'use strict'

import modoOscuro from "./modo-oscuro.js";
import desplegar from "./menu-responsive.js";
import createObserver, {mostrar, mostrarEncabezado} from "./animaciones.js";

 window.addEventListener('load', () => {
// Modo oscuro
const botonModoOscuro = document.querySelector('.modo-oscuro button');
const navModoOscuro = document.querySelector('nav.navegacion button');

modoOscuro(botonModoOscuro,navModoOscuro);
modoOscuro(navModoOscuro,botonModoOscuro);


// Menu responsive
const botonMenuNavegacion = document.querySelectorAll('nav.navegacion a, .menu button');

desplegar(botonMenuNavegacion);


//Animaciones
    var header = document.querySelector('.header');
    var elementosAnimados = document.querySelectorAll('#texto-animado, article div:nth-of-type(2), #trabajos div.container, #skills div.container div.izquierda, #skills div.container div.derecha');    



    createObserver(header,mostrarEncabezado);  
            
    elementosAnimados.forEach(elemento => {
        createObserver(elemento,mostrar);
    });       
    
});