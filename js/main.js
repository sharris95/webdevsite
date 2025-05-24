// main.js

// how many photos you have
const totalPhotos = 19;
const preloadedPhotos = [];

// preload them
for (let i = 1; i <= totalPhotos; i++) {
  const img = new Image();
  img.src = `images/photo${i}.jpg`;
  preloadedPhotos.push(img);
}

let currentIndex = 0;
const randomPhoto = document.getElementById('random-photo');
const photoContainer = document.getElementById('photo-container');

function showPhoto(index) {
  if (preloadedPhotos[index]) {
    randomPhoto.src = preloadedPhotos[index].src;
  } else {
    console.error(`No image at index ${index}`);
  }
}

// first shot
showPhoto(currentIndex);

// cycle on click
photoContainer.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalPhotos;
  showPhoto(currentIndex);
});
