'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

  console.log('buttons', e.target.getBoundingClientRect());

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
////////////////////////////////
////////////////////////////////
////////////////////////////////

console.log(document.documentElement);

console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');

console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//creating and inserting elements
//.insertAdjacentHtml()

const message = document.createElement('div');
message.classList.add('cookie-message');

// message.textContent = 'We use cookies for improved analytics';

message.innerHTML = `We use cookied for improved functionality and analytics. 
  <button class="btn btn--close-cookie">Got it!</button>`;
header.prepend(message); //prepend and append inserts element inside the header where header is the parent
// header.append(message.cloneNode(true)); //makes multiple copies of html element

header.after(message); //before and after inserts object before and after the header as siblings
// header.after(message);

//delete element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//styles
message.style.backgroundColor = 'blue';

console.log(message.style.height); //this is bec. message.style find the inline styles only

console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'wassup wassup';

//non standard
console.log(logo.desginer);
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'bankist');

console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');

console.log(link.href);

console.log(link.getAttribute('href'));

//data attributes
console.log(logo.dataset.versionNumber);

//classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

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
