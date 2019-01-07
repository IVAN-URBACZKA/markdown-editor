const texte = document.querySelector('textarea');
const render = document.querySelector('#markdown');

// get my date 
texte.value = localStorage.getItem("texte");

//render my data
render.innerHTML = marked(texte.value);


texte.addEventListener('keyup',function(){

  localStorage.setItem("texte",texte.value);
  render.innerHTML = marked(texte.value);


})


