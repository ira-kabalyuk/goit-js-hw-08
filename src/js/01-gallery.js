import galleryItemTpl from '../templates/gallery-item.hbs';
import galleryItems from './gallery.json';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const item = galleryItemTpl(galleryItems); // для всех карточек
// const item = galleryItems.map(galleryItrmTpl).join(""); для одной карточки

gallery.insertAdjacentHTML("afterbegin", item);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });



