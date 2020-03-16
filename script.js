const menu = document.getElementById('menu');
const portfolioImages = document.querySelector('.portfolio__images');
console.log(portfolioImages);
//-----------menu--------//
menu.addEventListener('click', (event) => {
  menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
})

//-----------interaction with pictures-----//
portfolioImages.addEventListener('click', (event) => {
  if (event.target.classList.value === 'portfolio__images-item-active' || event.target.classList.value === 'portfolio__images') {
      event.target.classList.remove('portfolio__images-item-active');
  }
  else {
  portfolioImages.querySelectorAll('div > img').forEach(element => {
    element.classList.remove('portfolio__images-item-active');
  });
  event.target.classList.add('portfolio__images-item-active');
}
});
