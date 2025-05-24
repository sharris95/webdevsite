// main.js
const totalPhotos = 19;
const preloadedPhotos = [];

// preload
for (let i = 1; i <= totalPhotos; i++) {
  const img = new Image();
  img.src = `images/photo${i}.jpg`;
  preloadedPhotos.push(img);
}

let currentIndex = 0;
const randomPhoto   = document.getElementById('random-photo');
const photoContainer = document.getElementById('photo-container');

function showPhoto(idx) {
  if (preloadedPhotos[idx]) {
    randomPhoto.src = preloadedPhotos[idx].src;
  }
}

// first display
showPhoto(currentIndex);

// cycle on click
photoContainer.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalPhotos;
  showPhoto(currentIndex);
});
