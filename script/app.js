const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("image-view");
const grayscaleSlider = document.getElementById("grayscale-slider");
const opacitySlider = document.getElementById("opacity-slider");
inputFile.addEventListener("change", uploadImage);
function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.textContent = "";
  imageView.style.border = 0;
}
dropArea.addEventListener("dragover", function (e) {
  e.preventDefault();
});
dropArea.addEventListener("drop", function (e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});
grayscaleSlider.addEventListener("input", () => {
  const grayscaleValue = grayscaleSlider.value;
  imageView.style.filter = `grayscale(${grayscaleValue}%)`;
});
opacitySlider.addEventListener("input", () => {
    const opacityValue = opacitySlider.value / 100;
    imageView.style.opacity = opacityValue;
  });