import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox' ;

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const item = galleryItems.map(({preview, original, description}) => 
  `<a href="${original}" class="gallery__item">
  <img class="gallery__image" src="${preview}" alt="${description}">  
  </a>`
).join("");

gallery.insertAdjacentHTML("afterbegin", item);

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});

