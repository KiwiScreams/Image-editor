const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("image-view");
inputFile.addEventListener("change", uploadImage);
function uploadImage()
{
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
}