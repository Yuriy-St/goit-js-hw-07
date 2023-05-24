import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`<img src="" width="1280">`, {
  onClose: removeLightboxEscapeListener,
});

// Change code below this line
const galleryEl = document.body.querySelector('.gallery');
galleryEl.innerHTML = galleryItems.reduce((htmlGallery, item) => {
  return (
    htmlGallery +
    `
	<li class="gallery__item">
		<a class="gallery__link" href="">
			<img
				class="gallery__image"
				src="${item.preview}"
				data-source="${item.original}"
				alt="${item.description}"
			/>
		</a>
	</li>
`
  );
}, '');

function showLightbox(event) {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName !== 'IMG') return;
  instance.element().querySelector('img').src = target.dataset.source;
  instance.show();
  onShowLightbox();
}

function onShowLightbox() {
  window.addEventListener('keyup', onCloseLightbox);
}

function onCloseLightbox(event) {
  if (instance.visible() && event.key === 'Escape') {
    instance.close();
  }
}

function removeLightboxEscapeListener() {
  window.removeEventListener('keyup', onCloseLightbox);
}

galleryEl.addEventListener('click', showLightbox);
