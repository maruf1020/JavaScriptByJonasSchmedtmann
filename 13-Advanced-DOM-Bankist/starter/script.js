'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

//////////////////////////////////////////////
// lecture 03. PROJECT Bankist Website part 1
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//////////////////////////////////////////////
// lecture 03. PROJECT Bankist Website part 2
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////
// lecture 07. Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1cooreds = section1.getBoundingClientRect();
  console.log(s1cooreds);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  console.log(
    'Height/Weight viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(s1cooreds);
  // window.scrollTo(s1cooreds.left, s1cooreds.top);
  // window.scrollTo(
  //   s1cooreds.left + window.pageXOffset,
  //   s1cooreds.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   lest: s1cooreds.left + window.pageXOffset,
  //   top: s1cooreds.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//////////////////////////////////////////////
// lecture 11. Event Delegation Implementing Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // console.log('link');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('link');
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// //////////////////////////////////////////////
// // lecture 13. Building a Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t => t.addEventListener('click', () => console.log('tab')));

tabsContainer.addEventListener('click', function (e) {
  // const clicked = e.target.parentElement;
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;
  //another way
  // if(clicked){
  //   // doing this
  // }

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  //Activate tab
  clicked.classList.add('operations__tab--active');

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// //////////////////////////////////////////////
// // lecture 14. Passing Arguments to Event Handlers

const nav = document.querySelector('.nav');

const handleHover = function (e) {
  // console.log(this);
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

// Passing "argument" into handler
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 0.5);
// });
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// //////////////////////////////////////////////
// // lecture 15. Implementing a Sticky Navigation The Scroll Event

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// //////////////////////////////////////////////
// // lecture 16. A Better Way The Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// //////////////////////////////////////////////
// // lecture 17. Revealing Elements on Scroll

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// //////////////////////////////////////////////
// // lecture 18. Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entries);

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  // entry.target.classList.remove('lazy-img');

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// //////////////////////////////////////////////
// // lecture 19. Building a Slider Component Part 1
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length - 1;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.5) translateX(-900px)';
// slider.style.overflow = 'visible';
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

createDots();

const activateDots = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = slide => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
    // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
    goToSlide(0);
    activateDots(0);
  } else {
    curSlide++;
    // slides.forEach(
    //   (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    // );
    goToSlide(curSlide);
    activateDots(curSlide);
  }
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
    // slides.forEach(
    //   (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    // );
    goToSlide(curSlide);
    activateDots(curSlide);
  } else {
    curSlide--;
    // slides.forEach(
    //   (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    // );
    goToSlide(curSlide);
    activateDots(curSlide);
  }
};
// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
goToSlide(0);
activateDots(0);

//Next Slide
btnRight.addEventListener('click', nextSlide);
//previous slide
btnLeft.addEventListener('click', prevSlide);

// //////////////////////////////////////////////
// // lecture 20. Building a Slider Component Part 2

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  else if (e.key === 'ArrowRight') nextSlide();
  // else return;
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    // console.log('dots');
    // const slide = e.target.dataset.slide;
    const { slide } = e.target.dataset;
    // console.log(slide);
    goToSlide(slide);
    activateDots(slide);
    curSlide = slide;
  }
});
// const slider = function () {
//   const slides = document.querySelectorAll('.slide');
//   const btnLeft = document.querySelector('.slider__btn--left');
//   const btnRight = document.querySelector('.slider__btn--right');
//   const dotContainer = document.querySelector('.dots');

//   let curSlide = 0;
//   const maxSlide = slides.length;

//   // Functions
//   const createDots = function () {
//     slides.forEach(function (_, i) {
//       dotContainer.insertAdjacentHTML(
//         'beforeend',
//         `<button class="dots__dot" data-slide="${i}"></button>`
//       );
//     });
//   };

//   const activateDot = function (slide) {
//     document
//       .querySelectorAll('.dots__dot')
//       .forEach(dot => dot.classList.remove('dots__dot--active'));

//     document
//       .querySelector(`.dots__dot[data-slide="${slide}"]`)
//       .classList.add('dots__dot--active');
//   };

//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//   };

//   // Next slide
//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }

//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const init = function () {
//     goToSlide(0);
//     createDots();

//     activateDot(0);
//   };
//   init();

//   // Event handlers
//   btnRight.addEventListener('click', nextSlide);
//   btnLeft.addEventListener('click', prevSlide);

//   document.addEventListener('keydown', function (e) {
//     if (e.key === 'ArrowLeft') prevSlide();
//     e.key === 'ArrowRight' && nextSlide();
//   });

//   dotContainer.addEventListener('click', function (e) {
//     if (e.target.classList.contains('dots__dot')) {
//       const { slide } = e.target.dataset;
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   });
// };
// slider();

//////////////////////////////////////////////
// lecture 01. Section Intro
//just intro

//////////////////////////////////////////////
// lecture 02. Section Roadmap
//Section Roadmap. just text content but i'll learn everything

//////////////////////////////////////////////
// lecture 04. How the DOM Really Works
//only theory about How the DOM Really Works

//////////////////////////////////////////////
// lecture 05. Selecting, Creating, and Deleting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// // const allSections = document.getElementsByTagName('section');

// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// //Creating and inserting elements
// //.InsertingAdjecentHTML

// const message = document.createElement('div');
// console.log(message);
// message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improve functionality and analytics';
// message.innerHTML =
//   'We use cookied for improve functionality and analytics<button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // only apends onece
// // header.append(message);
// //if you wanna copy
// // header.append(message.cloneNode(true));

// // header.before(message.cloneNode(true));
// // header.after(message.cloneNode(true));

// //delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message);
//   });

//////////////////////////////////////////////
// lecture 06. Styles, Attributes and Classes

// //Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height);
// // console.log((message.style.height = '12%'));
// console.log(message.style.backgroundColor);

// console.log(message.style.color);

// // console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
// // console.log(getComputedStyle(message).height);

// // accecss of stylesheet root
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attribute
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// //non-standrad
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// // const link = document.querySelector('.twitter-link');
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// //Classes
// logo.classList.add('c', 'j', 'k');
// logo.classList.remove('c');
// logo.classList.toggle('j');
// console.log(logo.classList.contains('k')); //not includes

// //Don't use
// // its remove alkl classes and replace
// logo.className = 'maruf';

// //////////////////////////////////////////////
// // lecture 08. Types of Events and Event Handlers
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('Great!!! you are reading the heading');

//   // h1.removeEventListener('mouseenter', alertH1);
// };

// //recent way
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// //old way
// h1.onmouseenter = function (e) {
//   alert('Great!!! you are reading the heading');
// };

//////////////////////////////////////////////
// lecture 09. Event Propagation Bubbling and Capturing
//only theory

// //////////////////////////////////////////////
// // lecture 10. Event Propagation in Practice
// // rgb(255,255,255)

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// // console.log(randomInt(0, 255));

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// // console.log(randomColor());

// document.querySelector('.nav__link').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Link', e.target, e.currentTarget);
//     console.log(e.currentTarget === this);

//     //stop propogation
//     // e.stopPropagation();
//   }
//   // true
// );

// document.querySelector('.nav__links').addEventListener(
//   'click',
//   function (e) {
//     // console.log('click');
//     this.style.backgroundColor = randomColor();
//     console.log('container', e.target, e.currentTarget);
//   }
//   // true
// );

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     // console.log('click');
//     this.style.backgroundColor = randomColor();
//     console.log('nav', e.target, e.currentTarget);
//   },
//   // true
//   false
// );

// //////////////////////////////////////////////
// // lecture 12. DOM Traversing

// const h1 = document.querySelector('h1');

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = '#FF2211';
// h1.lastElementChild.style.color = '#FFFF11';

// //Going upwords: basicly selectiong parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //Going sideways: basically sibiling
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(.7)';
// });

// //////////////////////////////////////////////
// // lecture 21. Lifecycle DOM Events
// Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

//don't abuse this
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = ''; //we cannot change the message
// });

// //////////////////////////////////////////////
// lecture 22. Efficient Script Loading defer and async
// just theory
