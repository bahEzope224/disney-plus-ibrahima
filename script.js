
const bouton = document.getElementById('bouton');
const texte = document.getElementById('texte');

bouton.addEventListener('click', function() {
  if (texte.style.display === 'none') {
    texte.style.display = 'block';
  } else {
    texte.style.display = 'none';
  }
});

const bouton2 = document.getElementById('bouton2');
const texte2 = document.getElementById('texte2');

bouton2.addEventListener('click', function() {
  if (texte2.style.display === 'none') {
    texte2.style.display = 'block';
  } else {
    texte2.style.display = 'none';
  }
});

const bouton3 = document.getElementById('bouton3');
const texte3 = document.getElementById('texte3');

bouton3.addEventListener('click', function() {
  if (texte3.style.display === 'none') {
    texte3.style.display = 'block';
  } else {
    texte3.style.display = 'none';
  }
});

const bouton4 = document.getElementById('bouton4');
const texte4 = document.getElementById('texte4');

bouton4.addEventListener('click', function() {
  if (texte4.style.display === 'none') {
    texte4.style.display = 'block';
  } else {
    texte4.style.display = 'none';
  }
});

const bouton5 = document.getElementById('bouton5');
const texte5 = document.getElementById('texte5');

bouton5.addEventListener('click', function() {
  if (texte5.style.display === 'none') {
    texte5.style.display = 'block';
  } else {
    texte5.style.display = 'none';
  }
});

// const barre_nav = document.querySelector(".navbar");
// const div2 = document.querySelector(".fond2");

// window.addEventListener("scroll",() => {

//     const{scrollTop} = document.documentElement;

//     if(scrollTop > 700){
//         barre_nav.classList.add("active");
//     }else{
//         barre_nav.classList.remove('active');
//     }
// })