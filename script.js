// ANIMATION DES VALUES

window.addEventListener('scroll', function() {
    var progress = document.getElementById("bar-1");
    var newValue = 90;
  
    progress.value = newValue;
    var progress = document.getElementById("bar-2");
    var newValue = 75;
  
    progress.value = newValue;
    var progress = document.getElementById("bar-3");
    var newValue = 50;
  
    progress.value = newValue;
    var progress = document.getElementById("bar-4");
    var newValue = 15;
  
    progress.value = newValue;
});

// TEXTE ALEATOIRE

const partover = document.querySelectorAll('.mouseover');
const texts = ["LE MEILLEUR", "LE PLUS BEAU", "LE PLUS FORT", "LE SPEEDRUNNER"];
const element = document.querySelector('.newtext');

partover.forEach(function(overeffect) {
    overeffect.addEventListener('mouseenter', function() {

        const textaleatoire = Math.floor(Math.random() * texts.length);
        document.querySelector('.newtext').textContent = texts[textaleatoire];

        element.classList.add('animate__animated', 'animate__shakeX');
    })
});

// MODALE

const boutonOuvrirModal = document.getElementById('ouvrir-modal');
const modal = document.getElementById('modal');
const boutonFermer = document.getElementsByClassName('fermer')[0];
const boutonEnvoyer = document.getElementById('envoyer');

boutonOuvrirModal.addEventListener('click', function() {
  modal.style.display = 'block';

  const element = document.querySelector('.modal');
  element.classList.add('animate__animated', 'animate__zoomIn');

  const blureffect = document.querySelector('.blureffect');
  blureffect.classList.add('flou');
});

boutonFermer.addEventListener('click', function() {

  modal.style.display = 'none';

  const blureffect = document.querySelector('.blureffect');
  blureffect.classList.remove('flou');
});

boutonEnvoyer.addEventListener('click', function(event) {
  modal.style.display = 'none';

  event.preventDefault();

  const nom = encodeURIComponent(document.getElementById('nom').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const message = encodeURIComponent(document.getElementById('message').value);

  const hrefValue = `mailto:prénomnom@gmail.com?subject=Contacter%20Par%20E-Mail&body=Nom:%20${nom}%0AEmail:%20${email}%0AMessage:%20${message}`;

  window.open(hrefValue);

  const blureffect = document.querySelector('.blureffect');
  blureffect.classList.remove('flou');
});