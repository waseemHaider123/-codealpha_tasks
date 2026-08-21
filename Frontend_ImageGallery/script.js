const images = [
  { url: 'https://picsum.photos/id/1015/600/400', caption: 'Mountain View' },
  { url: 'https://picsum.photos/id/1016/600/400', caption: 'Canyon Landscape' },
  { url: 'https://picsum.photos/id/1018/600/400', caption: 'Forest Road' },
  { url: 'https://picsum.photos/id/1019/600/400', caption: 'Ocean Cliffs' },
  { url: 'https://picsum.photos/id/1022/600/400', caption: 'Desert Trail' }
];

let currentIndex = 0;

const imgElement = document.getElementById('galleryImage');
const captionElement = document.getElementById('caption');
const dotsContainer = document.getElementById('dots');

function renderDots() {
  dotsContainer.innerHTML = '';
  images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateImage();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateImage() {
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = images[currentIndex].url;
    captionElement.textContent = images[currentIndex].caption;
    imgElement.style.opacity = 1;
  }, 200);
  renderDots();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

renderDots();
