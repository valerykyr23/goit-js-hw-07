import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

console.log(list);

// const markup = galleryItems.reduce((acc, { preview,description }) => acc + `<li><img src="${preview}"  alt="${description}" ></li>`, "");
const markup = galleryItems.map(({original,preview,description} )=> `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`).join("");

list.insertAdjacentHTML("beforeend", markup);

console.log(basicLightbox);

list.addEventListener("click", handleClick);



function handleClick(evt) {
    event.preventDefault();
    
const instance = basicLightbox.create(`
	 <img src="assets/images/image.png" width="800" height="600">
`);

    instance.show();

}

