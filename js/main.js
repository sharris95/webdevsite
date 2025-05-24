// main.js

// Total number of photos
const totalPhotos = 19;
const preloadedPhotos = [];

// Preload images named photo1.jpg to photo19.jpg
for (let i = 1; i <= totalPhotos; i++) {
  const img = new Image();
  img.src = `images/photo${i}.jpg`;
  preloadedPhotos.push(img);
}

// Start at the first image
let currentIndex = 0;

// Get references to HTML elements
const randomPhoto = document.getElementById('random-photo');
const photoContainer = document.getElementById('photo-container');

// Show the current photo
function showPhoto(index) {
  if (preloadedPhotos[index]) {
    randomPhoto.src = preloadedPhotos[index].src;
  } else {
    console.error(`Image at index ${index} not found.`);
  }
}

// Display the first image right away
showPhoto(currentIndex);

// Change to the next image on click
photoContainer.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalPhotos;
  showPhoto(currentIndex);
});
