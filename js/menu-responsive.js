'use strict'

const menu = document.querySelector('.menu');
const activar = document.querySelectorAll('header, .menu, .menu div, nav.navegacion, nav.modo-oscuro');

//generar botón collapse
menu.prepend(document.createElement("button"));
const collapseBtn = document.querySelector('.menu button');
collapseBtn.classList.add('collapse');
collapseBtn.prepend(document.createElement("span"));
const iconoCollapse = document.querySelector('.collapse span');
iconoCollapse.classList.add('icon-menu');

//desplegar menú
export default function desplegar(botones) { 

    botones.forEach(boton => {  
        boton.addEventListener('click', ()=> {
            activar.forEach(e => {
                e.classList.toggle('activo');
            })
            iconoCollapse.classList.toggle('icon-cross');
        })
    })
};
