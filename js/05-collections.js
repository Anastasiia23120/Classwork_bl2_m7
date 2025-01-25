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

const createGalleryCard = pictureInfo => {
  const galleryItemEl = document.createElement('li');

  galleryItemEl.classList.add('gallery-item');

  const galleryLinkEl = document.createElement('a');

  galleryLinkEl.href = '#';

  galleryItemEl.append(galleryLinkEl);

  const galleryImgEl = document.createElement('img');

  galleryImgEl.src = pictureInfo.url;
  galleryImgEl.alt = pictureInfo.alt;
  galleryImgEl.width = pictureInfo.width;
  galleryImgEl.height = pictureInfo.height;

  galleryLinkEl.append(galleryImgEl);

  return galleryItemEl;
};

// console.log(createGalleryCard(pictures[0]));
// console.log(createGalleryCard(pictures[1]));

const galleryCardArr = pictures.map(picture => createGalleryCard(picture));
console.log(galleryCardArr);

const galleryListEl = document.querySelector('.js-gallery');
// console.log(galleryListEl);

galleryListEl.append(...galleryCardArr);
