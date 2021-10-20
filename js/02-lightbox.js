import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallareRef = document.querySelector(".gallery");
const cardsMurkup = createCardsMurkup(galleryItems);

gallareRef.insertAdjacentHTML("afterbegin", cardsMurkup);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createCardsMurkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>
`;
    })
    .join("");
}
