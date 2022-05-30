// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item)=>{
  item.classList.add = 'ativo';
  console.log(item.classList);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item)=>{
  item.classList.remove = 'ativo';
  console.log(item.classList);
});

menu[0].classList.add = 'ativo';
console.log(menu[0].classList);
console.log('');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img)=>{
  console.log(img.getAttribute('src'), img.hasAttribute('alt'));
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"');
linkExterno.setAttribute('href', 'https://www.google.com/');