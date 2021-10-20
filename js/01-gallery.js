import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallareRef = document.querySelector(".gallery");
const cardsMurkup = createCardsMurkup(galleryItems);
let instance;

gallareRef.insertAdjacentHTML("afterbegin", cardsMurkup);
gallareRef.addEventListener("click", onModalOpenClick);

function onModalOpenClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  gallareRef.addEventListener("keydown", onEscModalClose, { once: true });

  instance = basicLightbox.create(
    `
    <div class="modal">
        <img
      src=${e.target.dataset.source}
      alt=${e.target.alt} width="800" height="600"
    />
    </div>
`
  );
  instance.show();
}

function createCardsMurkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
}

function onEscModalClose(evt) {
  if (evt.code === "Escape") {
    console.log(evt.code);
    instance.close();
  }
}

// ====
