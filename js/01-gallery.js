import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");




const markup = galleryItems.map(({original,preview,description} )=> `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`).join("");

list.insertAdjacentHTML("beforeend", markup);


list.addEventListener("click", handleClick);





function handleClick(evt) {
  event.preventDefault();
  
  const check = event.target.classList.contains("gallery__image");
    
  if (!check) {
    return;
}

  const instance = basicLightbox.create(`
	 <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  
  document.addEventListener("keydown", handleKey);


function handleKey(evt) {
  if (event.code !== "Escape") {
    return;
  }

  instance.close();
}

}




