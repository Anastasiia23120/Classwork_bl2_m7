/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryItemEl = document.createElement('li');

galleryItemEl.classList.add('gallery-item', 'js-gallery-item');

const galleryLinkEl = document.createElement('a');

galleryLinkEl.classList.add('js-gallery-link');
galleryLinkEl.href = '#';

const galleryImgEl = document.createElement('img');

galleryImgEl.src = 'https://picsum.photos/id/237/200/300';
galleryImgEl.alt = 'Labrador';

// const galleryListEl = document.querySelector('.js-gallery');
// galleryListEl.append(galleryItemEl);
// document.querySelector('.js-gallery-item').append(galleryLinkEl);
// document.querySelector('.js-gallery-link').append(galleryImgEl);

galleryItemEl.append(galleryLinkEl);
galleryLinkEl.append(galleryImgEl);

const galleryListEl = document.querySelector('.js-gallery');
galleryListEl.append(galleryItemEl);
