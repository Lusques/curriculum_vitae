const headerButtons = document.querySelectorAll('#header a[href^="#"]')
const menuButtons = document.querySelectorAll('.menu-phone--container a[href^="#"]')
const footer = document.querySelector('footer')
const contatoArea = document.querySelector('.footer-div-img');
var escorregamento = 130;


headerButtons.forEach(item => {
  item.addEventListener('click', rolaPagina)
})

menuButtons.forEach(item =>{
  item.addEventListener('click', rolaPagina)
})

function rolaPagina(event) {
  const width = window.screen.width;
  if(width <= 1200){
    escorregamento = 50;
  }
  else{
    escorregamento = 145;
  }
  event.preventDefault();
  const botao = event.target;
  const id = botao.getAttribute('href')
  let to = document.querySelector(id).offsetTop  
  if(id == '#image-capa' || id == '#contato'){
    to -= escorregamento;
    contatoArea.classList.add('destaque')
    setTimeout(removeDestaque, 2000)
  }

  window.scroll({
    top: to + escorregamento,
    behavior: "smooth"
  })
  function removeDestaque() {
    contatoArea.classList.remove('destaque')
    
  }
}