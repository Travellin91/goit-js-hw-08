// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryCardsSet = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item" style="border-radius: 4px; background: transparent; box-shadow: none;">
    <a class="gallery__item" href="${original}" style= "box-shadow: none;" style="border-radius: 4px;">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
  </div>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryCardsSet);

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
