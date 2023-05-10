import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.body.querySelector('.gallery');
gallery.innerHTML = galleryItems.reduce((htmlGallery, item) => {
  return (
    htmlGallery +
    `
	<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>
`
  );
}, '');

// for (const li of gallery.children) {
//   li.querySelector('a').addEventListener('click', event =>
//     event.preventDefault()
//   );
// }

const lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: 'alt',
  fadeSpeed: 250,
});
console.log(gallery);
