import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`<img src="" width="1280">`, {
  onClose: removeLightboxEscapeListener,
});

// Change code below this line
const gallery = document.body.querySelector('.gallery');
gallery.innerHTML = galleryItems.reduce((htmlGallery, item) => {
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

for (const li of gallery.children) {
  li.querySelector('a').addEventListener('click', event =>
    event.preventDefault()
  );
}

function showLightbox(event) {
  const { target } = event;
  event.stopPropagation();
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

gallery.addEventListener('click', showLightbox);
