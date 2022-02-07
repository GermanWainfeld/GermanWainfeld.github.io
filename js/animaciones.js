'use strict'
var encabezado = document.querySelector('.menu a.logo-barra');

export function mostrar (intersecciones) {
    intersecciones.forEach(interseccion => {
        if(interseccion.isIntersecting){
            interseccion.target.classList.add('mostrar');
        }
    })
};

export function mostrarEncabezado (intersecciones) {
    intersecciones.forEach(interseccion => {
        if(!interseccion.isIntersecting){
            encabezado.classList.add('encabezado');
            setTimeout(() => encabezado.style.setProperty('opacity', '1'), 200);
        }else{
            encabezado.style.setProperty('opacity', '0');                
            setTimeout(() => encabezado.classList.remove('encabezado'), 400);
        }
    })
};

export default function createObserver(target,accion) {
    var observer;
    var options = {
        root: null,
        rootMargin: "10px",
        threshold: 0
    };        
    observer = new IntersectionObserver(accion, options);
    observer.observe(target);
};