import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="" width="1280">
`);

// Change code below this line
const gallery = document.body.querySelector('.gallery');
gallery.innerHTML = galleryItems.reduce((htmlGallery, item) => {
	return htmlGallery + `
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
}, '');

for (const li of gallery.children) {
	li.querySelector('a').addEventListener('click', event => event.preventDefault());
};

gallery.addEventListener('click', event => {
	const { target } = event;
	event.stopPropagation();
	if (target.nodeName !== 'IMG') return;
	instance.element().querySelector('img').src = target.dataset.source;
	instance.show();
})

console.log(instance.element());
