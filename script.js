const menu = document.getElementById('menu');
const portfolioImages = document.querySelector('.portfolio__images');
const portfolioNav = document.getElementById('portfolioNav');
const ANCHORS = document.querySelectorAll('a[href*="#"]')
const header = document.querySelector('.header');
const home = document.querySelector('#menu-home');
console.log(menu);
console.log(portfolioNav);
console.log(portfolioImages);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const removeMenuItem = () => {
  menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
}

//-----------menu--------//
window.addEventListener('scroll', () => {
 if (window.pageYOffset > 70) {
   header.classList.add('header-fixed');
   if (window.pageYOffset > 70 && window.pageYOffset < 400) {
     removeMenuItem();
     document.querySelector('#menu-home').classList.add('active');
   }
   if (window.pageYOffset > 70 && window.pageYOffset > 400) {
     removeMenuItem();
     document.querySelector('#menu-services').classList.add('active');
   }
   if (window.pageYOffset > 70 && window.pageYOffset > 900) {
     removeMenuItem();
     document.querySelector('#menu-portfolio').classList.add('active');
   }
   if (window.pageYOffset > 70 && window.pageYOffset > 1800) {
     removeMenuItem();
     document.querySelector('#menu-about').classList.add('active');
   }
   if (window.pageYOffset > 70 && window.pageYOffset > 2400) {
     removeMenuItem();
     document.querySelector('#menu-contact').classList.add('active');
   }
 }
 else {
   header.classList.remove('header-fixed');
 }
});


menu.addEventListener('click', (event) => {
  menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
})

////-------smooth scrolling---//////
for (let anchor of ANCHORS) {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })
}

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

///------------------ tab switching  -------------///
portfolioNav.addEventListener('click', (event) => {
  if(event.target.classList.value.includes('active') === true) return;

  portfolioNav.querySelectorAll('li').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');

  let randomValue = getRandomInt(6);
  let randomValue2 = getRandomInt(6) + 6;
  console.log(randomValue);
  console.log(randomValue2);
  let temp;
  let newarr = [];
  let count = 0;

  console.log(portfolioImages.querySelectorAll('div > img'));
  let arr = portfolioImages.querySelectorAll('div > img');
  arr.forEach(item => {
    newarr.push(item.src);
    count++;
    item.src = '';
  })
  temp = newarr[randomValue];
  newarr[randomValue] = newarr[randomValue2];
  newarr[randomValue2] = temp;

  arr.forEach((item, index) =>{
    item.src = newarr[index];
  })
});
