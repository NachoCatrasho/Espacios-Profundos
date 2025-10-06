import { useState, useEffect } from 'react';


// document.addEventListener("DOMContentLoaded",function(){//aqui va TODO lo que quieras, despues de carcar la pag, si es parte del documento

// })

//const Libros = ['DIARIO DE SUPERVIVENCIA.html', 'DIARIO DE UN SER INMORTAL.html', 'ElCambio.html', 'index.html', 'Una Vida Normal!?.html'];

// let boton1 = document.getElementById('rotar');

// function buscar(){
//     let buscar = document.getElementById('rotar').innerHTML = 'otra vez \n 64';
// }

// function publish(){
//     const el = document.querySelector(`h1`);
//     el.innerHTML='untextomas';
// }

function buscar(){
    let en = Document.getElementById("in");

    en.getText();

    en.innerHTML("hsdhoasnd");
}

//prueba de cambio ifr

const Libros = ['DiarioDeSupervivencia.html', 'DiarioDeUnSerInmortal.html', 'ElCambio.html', 'index.html', 'UnaVidaNormal.html','shalala.html','DUInmortalTwo.html','EspaciosProfundos.html','EspaciosProfundosOriginal.html'];
const  ifr = document.getElementById('historias');
let src = 'HistoriasPar/' + Libros[Math.round(Math.random() * 8)];
ifr.setAttribute('src', src);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

// averiguar como acceder al texto
function buscar(){
    const buscar = document.getElementById('Buscar'); /*.value.focus*/
}

function cambio(){
    document.body.classList.toggle('realidad-alterada');
}

