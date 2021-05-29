var pages = document.getElementsByClassName('page');
var img = document.querySelectorAll('.innerPage__aparecer');
//Interacción 1
var button = document.querySelector('.button--on');
var interaccion = document.querySelector('.interaccion');
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
var planet = document.querySelector('.planets--show');
var planet2 = document.querySelector('.avatar__planeta2');

var textInteraccion2 = document.querySelector('.text-interaccion2');
var organizationImg = document.querySelector('.organization');
var keyImg = document.querySelector('.keyImg');
var link = document.querySelector('.link');
var textLink = document.querySelector('.text__cursor');
let show = false;


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

      console.log(this.pageNum);
      if (this.pageNum % 2 === 0) {

        if (this.pageNum === 1 || this.pageNum === 4) {
          planet2.classList.remove('hidden');
        } else {
          planet2.classList.add('hidden');
        }

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

        if (this.pageNum === 9 || this.pageNum === 12) {
          textInteraccion2.classList.remove('hidden');
          keyImg.classList.remove('hidden');
          organizationImg.classList.remove('hidden');
          show = true;
        } else {
          textInteraccion2.classList.add('hidden');
          keyImg.classList.add('hidden');
          organizationImg.classList.add('hidden');
          textLink.classList.add('hidden');

          show = false;
        }

        this.classList.remove('flipped');
        this.previousElementSibling.classList.remove('flipped');
      }
      else {

        if (this.pageNum === 1 || this.pageNum === 4) {
          planet2.classList.remove('hidden');
        } else {
          planet2.classList.add('hidden');
        }

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

        if (this.pageNum === 7 || this.pageNum === 10) {
          planet.classList.remove('hidden');
        } else {
          planet.classList.add('hidden');

        }
        if (this.pageNum === 9 || this.pageNum === 12) {
          textInteraccion2.classList.remove('hidden');
          keyImg.classList.remove('hidden');
          organizationImg.classList.remove('hidden');
          show = true;
        } else {
          textInteraccion2.classList.add('hidden');
          keyImg.classList.add('hidden');
          organizationImg.classList.add('hidden');
          textLink.classList.add('hidden');


          show = false;
        }

        this.classList.add('flipped');
        this.nextElementSibling.classList.add('flipped');
      }
    }
  }
});

button.addEventListener('click', () => {

  star.forEach((even) => {
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

option1.addEventListener('click', () => {

  resultado2.classList.remove('hidden');
  option.classList.add('hidden');
  textInteraccion.classList.add('hidden');

});

option2.addEventListener('click', () => {

  resultado1.classList.remove('hidden');
  option.classList.add('hidden');
  textInteraccion.classList.add('hidden');

});

option3.addEventListener('click', () => {

  resultado2.classList.remove('hidden');
  option.classList.add('hidden');
  textInteraccion.classList.add('hidden');


});

document.addEventListener('keyup', (event) => {

  if (show) {
    var name = event.key;
    if (name === 'o' || name === 'O') {
      azul.classList.remove('hidden');
      link.classList.remove('hidden');
      textLink.classList.remove('hidden');
      link.setAttribute('href', "https://www.nasa.gov/multimedia/imagegallery/image_feature_908.html");
      textInteraccion2.innerHTML = 'Ahora presiona la letra “B”.';
      keyImg.setAttribute('src', "./img/keyB.png");
      organizationImg.setAttribute('src', "./img/clasificacionO.png");
    }
    if (name === 'b' || name === 'B') {
      azulClaro.classList.remove('hidden');
      link.setAttribute('href', "https://www.nasa.gov/multimedia/imagegallery/image_feature_1209.html");
      textInteraccion2.innerHTML = 'Ahora presiona la letra “A”.';
      keyImg.setAttribute('src', "./img/keyA.png");
      organizationImg.setAttribute('src', "./img/clasificacionB.png");
    }
    if (name === 'a' || name === 'A') {
      blanco.classList.remove('hidden');
      link.setAttribute('href', "https://www.jpl.nasa.gov/images/tiny-particles-so-far-away");
      textInteraccion2.innerHTML = 'Ahora presiona la letra “F”.';
      keyImg.setAttribute('src', "./img/keyF.png");
      organizationImg.setAttribute('src', "./img/clasificacionA.png");
    }
    if (name === 'f' || name === 'F') {
      amarillo.classList.remove('hidden');
      link.setAttribute('href', "https://apod.nasa.gov/apod/ap060809.html");
      textInteraccion2.innerHTML = 'Ahora presiona la letra “G”.';
      keyImg.setAttribute('src', "./img/keyG.png");
      organizationImg.setAttribute('src', "./img/clasificacionF.png");

    }
    if (name === 'g' || name === 'G') {
      amarrilloIn.classList.remove('hidden');
      link.setAttribute('href', "https://www.nasa.gov/mission_pages/sunearth/science/Sunlayers.html");
      textInteraccion2.innerHTML = 'Ahora presiona la letra “K”.';
      keyImg.setAttribute('src', "./img/keyK.png");
      organizationImg.setAttribute('src', "./img/clasificacionG.png");
    }
    if (name === 'k' || name === 'K') {
      naranja.classList.remove('hidden');
      link.setAttribute('href', "https://apod.nasa.gov/apod/ap121224.html");
      textInteraccion2.innerHTML = 'Ahora presiona la letra “M”.';
      keyImg.setAttribute('src', "./img/keyM.png");
      organizationImg.setAttribute('src', "./img/clasificacionK.png");
    }
    if (name === 'm' || name === 'M') {
      red.classList.remove('hidden');
      link.setAttribute('href', "https://nasasearch.nasa.gov/search/images?utf8=%E2%9C%93&affiliate=nasa&query=+Betelgeuse+");
      textInteraccion2.innerHTML = '';
      keyImg.classList.add('hidden');
      organizationImg.setAttribute('src', "./img/clasificacionM.png");

    }

  }





});

