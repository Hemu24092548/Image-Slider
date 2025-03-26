const images = [
    './nature1.JPG',
    './nature2.JPG',
    './nature3.JPG',
    './nature4.JPG',
    './nature5.JPG',
    './nature6.JPG',
    './nature7.JPG',
    './7X6A8027.JPG'
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

