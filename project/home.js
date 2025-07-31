const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/180a6b2d0708f53f.jpeg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a8fd7d3747258428.jpeg?q=80",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/751b87f2ba1e9a00.jpeg?q=80",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/180a6b2d0708f53f.jpeg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1558a721300c7f6d.jpg?q=80"
];
let index = 0;

function showImage(){
    document.getElementById("slider").src = images[index]
}
function nextImage(){
    index = (index + 1)%images.length;
    showImage();
}
function prevImage(){
    index = (index - 1 + images.length) %images.length;
    showImage();
}
setInterval(nextImage,3000);