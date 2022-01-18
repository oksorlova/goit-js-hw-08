// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector ('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup (galleryItems) {

    return galleryItems.map(({preview, original, description}) => {
        return  `
    <li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
       </a>
    </li>
        `
    }).join('');   
};

    var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });