// Generate an array of photo filenames from photo1.jpg to photo29.jpg.
const photoList = Array.from({ length: 29 }, (_, i) => `photo${i + 1}.jpg`);

// Array of short notes to display.
const notes = [
  'Experimenting with animations!',
  'Finished a new React build!',
  'More photos on the way!'
];

// Get references to HTML elements.
const randomPhoto = document.getElementById('random-photo');
const photoContainer = document.getElementById('photo-container');
const note = document.getElementById('note');

// Function to pick a random item from an array.
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to change the photo.
function changePhoto() {
  const newPhoto = getRandomItem(photoList);
  // Update the image source. Adjust path since index.html is in html/ folder.
  randomPhoto.src = `../images/${newPhoto}`;
}

// Automatically change the photo every 10 seconds.
setInterval(changePhoto, 10000);

// Change the photo when the user clicks the photo container.
photoContainer.addEventListener('click', changePhoto);

// Automatically update the note every 5 seconds.
setInterval(() => {
  note.textContent = getRandomItem(notes);
}, 5000);