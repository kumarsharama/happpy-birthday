let images = [
    "images/1000054083.jpg",
    "images/1000054084.jpg",
    "images/1000054085.jpg",
    "images/1000054086.jpg",
    "images/1000054087.jpg",
    "images/1000054088.jpg"
];

let index = 0;
let imgElement = document.getElementById("slideshow");

function changeImage() {
    index = (index + 1) % images.length;
    imgElement.style.opacity = 0;

    setTimeout(() => {
        imgElement.src = images[index];
        imgElement.style.opacity = 1;
    }, 500);
}

setInterval(changeImage, 3000);
