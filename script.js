const menu = document.getElementById('menu');
const portfolioImages = document.querySelector('.portfolio__images');
const portfolioNav = document.getElementById('portfolioNav');
const ANCHORS = document.querySelectorAll('a[href*="#"]')
const header = document.querySelector('.header');
const home = document.querySelector('#menu-home');
const form = document.querySelector('.contact__form');
const submitButton = document.querySelector('.submit__button');
const blockMessage = document.querySelector('.block__message');
const closeBlock = document.querySelector('.close-block');
const control = document.querySelectorAll('.control');
const slider = document.querySelector('.slider');
const turnoffPhone1 = document.querySelector('.turnoff__phone1');
const turnoffPhone2 = document.querySelector('.turnoff__phone2');
const lockedPhone1 = document.querySelector('.locked__phone1');
const lockedPhone2 = document.querySelector('.locked__phone2');
const phonesAnimation = document.querySelectorAll('.phones__animation');
const mobileMenu = document.querySelector('.mobile__menu');
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const removeMenuItem = () => {
  menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
}

//-----------menu--------//
mobileMenu.addEventListener('click', (event) => {
  if(event.target.classList.value.includes('active')){
    mobileMenu.classList.remove('active');
  }
  else {
    mobileMenu.classList.add('active');
  }

})



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
  } else {
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
  } else {
    portfolioImages.querySelectorAll('div > img').forEach(element => {
      element.classList.remove('portfolio__images-item-active');
    });
    event.target.classList.add('portfolio__images-item-active');
  }
});

///------------------ tab switching  -------------///
portfolioNav.addEventListener('click', (event) => {
  if (event.target.classList.value.includes('active') === true) return;

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

  arr.forEach((item, index) => {
    item.src = newarr[index];
  })
});

//-----------slider---------///
let items = document.querySelectorAll('.item-phone');
let currentItem = 0;
let isEnabled = true;

const changeBackground = () => {
  if (slider.classList.value.includes('slider1')) {
    slider.classList.remove('slider1');
    slider.classList.add('slider2');
  } else {
    slider.classList.remove('slider2');
    slider.classList.add('slider1');
  }
}


function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active', direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add('next-item', direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next-item', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

document.querySelector('.prev').addEventListener('click', function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector('.next').addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

control.forEach((item) => {
  item.addEventListener('click', () => {
    changeBackground();
    if (slider.classList.value.includes('slider2')) {
      phonesAnimation.forEach((items) =>{
        items.classList.add('disable');
      })
    }
    else {
      phonesAnimation.forEach((items) =>{
        items.classList.remove('disable');
      })
    }

  })
});

///-----turn off phones------///
turnoffPhone1.addEventListener('click', () => {
  if (lockedPhone1.classList.value.includes('off')) {
    lockedPhone1.classList.remove('off');
  }
  else lockedPhone1.classList.add('off');
});

turnoffPhone2.addEventListener('click', () => {
  if (lockedPhone2.classList.value.includes('off')) {
    lockedPhone2.classList.remove('off');
  }
  else lockedPhone2.classList.add('off');
})

//-----------submit---------///
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const subject = document.querySelector('#subject').value.toString();
  const details = document.querySelector('#details').value.toString();
  blockMessage.style.setProperty('height', document.querySelector('body').scrollHeight + 'px');
  document.querySelector('#result-subject').textContent = (subject === '') ? ('Без темы') : ('Тема: ' + subject);
  document.querySelector('#result-details').textContent = (details === '') ? ('Без описания') : ('Описание: ' + details);
  blockMessage.classList.remove('hidden');
});

closeBlock.addEventListener('click', (event) => {
  blockMessage.classList.add('hidden');
  form.reset();
});
