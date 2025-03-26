const images = [
    'images/nature1.JPG',
    'images/nature2.JPG',
    'images/nature3.JPG',
    'images/nature4.JPG',
    'images/nature5.JPG',
    'images/nature6.JPG',
    'images/nature7.JPG',
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

