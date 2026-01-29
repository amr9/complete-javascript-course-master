'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const allSections = document.querySelectorAll('.section');
const images = document.querySelectorAll('img[data-src]');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');
let currentSlide = 0;
const maxSlide = slides.length;
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////////////////
//btn-scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log('s1coords', s1coords);

  console.log('button link', e.target.getBoundingClientRect());

  console.log('current scroll x and y', window.pageXOffset, window.pageYOffset);

  console.log(
    'view of client pxs',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth,
  );

  //scrolling
  // window.scrollTo(
  //   s1coords.x + window.pageXOffset,
  //   s1coords.y + window.pageYOffset,
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' }); //<---------- this is the way to scroll to elements
});

///////////////////////////////////////
//page delegation

// const log = function (e) {
//   e.preventDefault();
//   const id = this.getAttribute('href');
//   console.log(id);
//   document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
// };
// document.querySelectorAll('.nav__link').forEach(link => {
//   link.addEventListener('click', log);
// });

//1 - add eventlistener to common parent
//2 - determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
});

//tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  if (!clicked) return;

  //active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //activate content area

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//passing arguments into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//sticky nav old not optimum
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   if (this.window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//sticky nav new efficient
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const onbsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallBack, onbsOptions);
// observer.observe(section1);

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//reveal elements on scroll
const revealSection = function (entries, observer) {
  // console.log(entries); //all (entries/intersection) are observed at the reload of dom or 1st dom creation of observers
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//lazy loading images
const lazyLoader = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.setAttribute('src', entry.target.dataset.src);

    entry.target.addEventListener('load', function (e) {
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
  });
};
const imgObserver = new IntersectionObserver(lazyLoader, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

images.forEach(img => imgObserver.observe(img));

//slider implementation
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};
btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);
////////////////////////////////
////////////////////////////////
////////////////////////////////

// console.log(document.documentElement);

// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');

// const allSections = document.querySelectorAll('.section');

// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// //creating and inserting elements
// //.insertAdjacentHtml()

// const message = document.createElement('div');
// message.classList.add('cookie-message');

// // message.textContent = 'We use cookies for improved analytics';

// message.innerHTML = `We use cookied for improved functionality and analytics.
//   <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message); //prepend and append inserts element inside the header where header is the parent
// // header.append(message.cloneNode(true)); //makes multiple copies of html element

// header.after(message); //before and after inserts object before and after the header as siblings
// // header.after(message);

// //delete element
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //styles
// message.style.backgroundColor = 'blue';

// console.log(message.style.height); //this is bec. message.style find the inline styles only

// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'wassup wassup';

// //non standard
// console.log(logo.desginer);
// console.log(logo.getAttribute('designer'));

// logo.setAttribute('company', 'bankist');

// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');

// console.log(link.href);

// console.log(link.getAttribute('href'));

// //data attributes
// console.log(logo.dataset.versionNumber);

// //classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// const alertH1 = function (e) {
//   alert('addeventlistener: mouse hovered over h1'); //this is the way
//   h1.removeEventListener('mouseenter', alertH1);
// };
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);
// h1.onmouseenter = function (e) {
//   alert('addeventlistener: mouse hovered over h1');   //the old way
// };
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('Link');
//   console.log(e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('container');
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     console.log('nav');
//     console.log(e.target, e.currentTarget);
//     this.style.backgroundColor = randomColor();
//   },
//   true,
// ); //third param. true for capturing event false for bubbling event

// const h1 = document.querySelector('h1');

// //child nodes
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// //parent nodes
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.backgroundColor = 'blue';
// h1.closest('h1').style.backgroundColor = 'green';

// //siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// });
