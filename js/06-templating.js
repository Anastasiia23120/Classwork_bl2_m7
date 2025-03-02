const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

// const titleEl = document.querySelector('.js-title');
// // console.log(titleEl);
// // titleEl.textContent = '<span>My</span> gallery!';
// titleEl.innerHTML = '<span>My</span> gallery!';

const createGalleryCard = pictureInfo => {
  return `
    <li class="gallery-item">
        <a href="#">
            <img src="${pictureInfo.url}" alt="${pictureInfo.alt}" width="${pictureInfo.width}" height="${pictureInfo.height}">
        </a>
    </li>
    `;
};

// console.log(createGalleryCard(pictures[0]));
// console.log(createGalleryCard(pictures[1]));

const galleryCardsTemplate = pictures.map(picture => createGalleryCard(picture)).join('');

const galleryListEl = document.querySelector('.js-gallery');
console.log(galleryListEl);

galleryListEl.innerHTML = galleryCardsTemplate;

// galleryListEl.insertAdjacentHTML('beforebegin', galleryCardsTemplate);
// galleryListEl.insertAdjacentHTML('afterbegin', galleryCardsTemplate);
// galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);
// galleryListEl.insertAdjacentHTML('afteend', galleryCardsTemplate);
