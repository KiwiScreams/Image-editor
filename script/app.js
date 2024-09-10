const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("image-view");
const grayscaleSlider = document.getElementById("grayscale-slider");
const opacitySlider = document.getElementById("opacity-slider");
const blurSlider = document.getElementById("blur-slider");
const brightnessSlider = document.getElementById("brightness-slider");
const contrastSlider = document.getElementById("contrast-slider");
const hueRotateSlider = document.getElementById("hue-rotate-slider");
const invertSlider = document.getElementById("invert-slider");
const saturateSlider = document.getElementById("saturate-slider");
const sepiaSlider = document.getElementById("sepia-slider");
const shadowSlider = document.getElementById("shadow-slider");
const shadowColorInput = document.getElementById("shadow-color");

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
blurSlider.addEventListener("input", () => {
  const blurValue = blurSlider.value;
  imageView.style.filter = `blur(${blurValue}px)`;
});
brightnessSlider.addEventListener("input", () => {
  const brightnessValue = brightnessSlider.value / 100;
  imageView.style.filter = `brightness(${brightnessValue})`;
});
contrastSlider.addEventListener("input", () => {
  const contrastValue = contrastSlider.value / 100;
  imageView.style.filter = `contrast(${contrastValue})`;
});
hueRotateSlider.addEventListener("input", () => {
  const hueRotateValue = hueRotateSlider.value;
  imageView.style.filter = `hue-rotate(${hueRotateValue}deg)`;
});
invertSlider.addEventListener("input", () => {
  const invertValue = invertSlider.value / 100;
  imageView.style.filter = `invert(${invertValue})`;
});
saturateSlider.addEventListener("input", () => {
  const saturateValue = saturateSlider.value;
  imageView.style.filter = `saturate(${saturateValue})`;
});
sepiaSlider.addEventListener("input", () => {
  const sepiaValue = sepiaSlider.value / 100;
  imageView.style.filter = `sepia(${sepiaValue})`;
});
shadowSlider.addEventListener("input", () => {
  const shadowValue = shadowSlider.value;
  const shadowColor = shadowColorInput.value;
  imageView.style.filter = `drop-shadow(${shadowValue}px ${shadowValue}px 10px ${shadowColor})`;
});
