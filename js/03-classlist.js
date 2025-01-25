// const navLinkEl = document.querySelector('.js-site-nav-link');
// console.dir(navLinkEl);

// navLinkEl.style.color = 'teal';
// navLinkEl.style.backgroundColor = 'pink';

// const navLinkEl = document.querySelector('.js-site-nav-link');
// console.dir(navLinkEl);

// navLinkEl.classList.remove('js-site-nav-link');
// navLinkEl.classList.add('js-site-nav-link');

// navLinkEl.classList.add('is-open');
// navLinkEl.classList.remove('is-open');

// const backdropEl = document.querySelector('.js-backdrop');
// console.dir(backdropEl);

// backdropEl.classList.add('is-open');
// // backdropEl.classList.remove('is-open');

const navLinkEl = document.querySelector('.js-site-nav-link');
console.dir(navLinkEl);

console.log(navLinkEl.classList.contains('is-open'));

console.log(navLinkEl.classList.contains('js-site-nav-link'));

navLinkEl.classList.replace('js-site-nav-link', 'is-open');

navLinkEl.classList.toggle('is-open');
