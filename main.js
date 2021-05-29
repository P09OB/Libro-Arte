var pages = document.getElementsByClassName('page');
var img = document.querySelectorAll('.innerPage__aparecer');
//Interacción 1
var button = document.querySelector('.button--on');
var textInstruccion = document.querySelector('.text--instruccion');
var textInteraccion = document.querySelector('.text--interaccion1');
var option = document.querySelector('.button--interaccion1');
var option1 = document.querySelector('.opcion1');
var option2 = document.querySelector('.opcion2');
var option3 = document.querySelector('.opcion3');
var resultado1 = document.querySelector('.interaccion__resultado--bien');
var resultado2 = document.querySelector('.interaccion__resultado--mal');
var star = document.querySelectorAll('.star--1');
var red = document.querySelector('.red');
var azul = document.querySelector('.azul');
var amarillo = document.querySelector('.amarillo');
var azulClaro = document.querySelector('.azulClaro');
var amarrilloIn = document.querySelector('.amarrilloIn');
var blanco = document.querySelector('.blanco');
var naranja = document.querySelector('.naranja');


for (var i = 0; i < pages.length; i++) {
  var page = pages[i];
  if (i % 2 === 0) {
    page.style.zIndex = (pages.length - i);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < pages.length; i++) {
    //Or var page = pages[i];
    pages[i].pageNum = i + 1;
    pages[i].onclick = function () {
      if (this.pageNum % 2 === 0) {
        if (this.pageNum === 5 || this.pageNum === 8) {
          button.classList.remove('hidden');
          textInstruccion.classList.remove('hidden');

        } else {
          textInstruccion.classList.add('hidden');
          button.classList.add('hidden');
          textInteraccion.classList.add('hidden');
          option.classList.add('hidden');
          resultado1.classList.add('hidden');
          resultado2.classList.add('hidden');

        }
        this.classList.remove('flipped');
        this.previousElementSibling.classList.remove('flipped');
      }
      else {
        if (this.pageNum === 5 || this.pageNum === 8) {
          button.classList.remove('hidden');
          textInstruccion.classList.remove('hidden');
        } else {
          textInstruccion.classList.add('hidden');
          button.classList.add('hidden');
          textInteraccion.classList.add('hidden');
          option.classList.add('hidden');
          resultado1.classList.add('hidden');
          resultado2.classList.add('hidden');




        }
        this.classList.add('flipped');
        this.nextElementSibling.classList.add('flipped');
      }
    }
  }
});

button.addEventListener('click', () => {

  star.forEach((even)=>{
    even.classList.remove('hidden');
  });


  function imagenAparecer() {

    img.forEach((star) => {
      star.classList.remove('hidden');
    });

    setTimeout(imagenDesaparecer, 1000);

  }

  function imagenDesaparecer() {

    img.forEach((star) => {
      star.classList.add('hidden');
    });

    setTimeout(imagenAparecer, 1000);

  }

  setTimeout(imagenAparecer, 1000);
  textInteraccion.classList.remove('hidden');
  button.classList.add('hidden');
  textInstruccion.classList.add('hidden');
  option.classList.remove('hidden');


  

});

option1.addEventListener('click',()=>{

  resultado1.classList.remove('hidden');
  option.classList.add('hidden');
  textInteraccion.classList.add('hidden');

});

option2.addEventListener('click',()=>{

  resultado2.classList.remove('hidden');
  option.classList.add('hidden');
  textInteraccion.classList.add('hidden');


});

option3.addEventListener('click',()=>{

  resultado2.classList.remove('hidden');
  option.classList.add('hidden');
  textInteraccion.classList.add('hidden');


});


document.addEventListener('keyup', (event) => {

  var name = event.key;
  if (name === 'o' || name === 'O') {
    azul.classList.remove('hidden');
  }
  if (name === 'b' || name === 'B') {
    azulClaro.classList.remove('hidden');
  }
  if (name === 'f' || name === 'F') {
    amarillo.classList.remove('hidden');
  }
  if (name === 'g' || name === 'G') {
    amarrilloIn.classList.remove('hidden');
  }
  if (name === 'm' || name === 'M') {
    red.classList.remove('hidden');
  }
  if (name === 'k' || name === 'K') {
    naranja.classList.remove('hidden');
  }
  if (name === 'a' || name === 'A') {
    blanco.classList.remove('hidden');
  }

});

