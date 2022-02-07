'use strict'

export default function modoOscuro(boton,botonDos) { 
    boton.addEventListener('click', ()=> {

    boton.classList.toggle('activo');
    botonDos.classList.toggle('activo');

    if(boton.classList.contains('activo')) {
        document.documentElement.style.setProperty('--color-texto', '#ffdda6'); 
        document.documentElement.style.setProperty('--color-bg', '#1e1e1e'); 
        document.documentElement.style.setProperty('--color-bg-claro', '#252526'); 
        boton.innerHTML = 'Modo claro';
    }else{
        document.documentElement.style.setProperty('--color-texto', '#3a312e'); 
        document.documentElement.style.setProperty('--color-bg', '#ffdda6'); 
        document.documentElement.style.setProperty('--color-bg-claro', '#ffebcc');
        boton.innerHTML = 'Modo oscuro';
    }})
}