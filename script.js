const images = [
    'images/nature1.jpg',
    'images/nature2.jpg',
    'images/nature3.jpg',
    'images/nature4.jpg',
    'images/nature5.jpg',
    'images/nature6.jpg',
    'images/nature7.jpg',
    'images/7X6A8027.JPG'
];

let currentIndex = 0;

function showImage(index) {
    const slider = document.getElementById('slider');
    slider.src = images[index];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}


showImage(currentIndex);

