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
const rotateLeftButton = document.getElementById("rotate-left");
const rotateRightButton = document.getElementById("rotate-right");
const resetRotationButton = document.getElementById("reset-rotation");
const flipRotationButton = document.getElementById("flip-rotation");
const saveImageButton = document.getElementById("save-image");
const flipVerticalButton = document.getElementById("flip-vertical");
let rotation = 0;
let flipState = 1;
let flipVerticalState = 1;
rotateLeftButton.addEventListener("click", () => {
  rotation -= 90;
  imageView.style.transform = `rotate(${rotation}deg)`;
});
rotateRightButton.addEventListener("click", () => {
  rotation += 90;
  imageView.style.transform = `rotate(${rotation}deg)`;
});
flipRotationButton.addEventListener("click", () => {
  flipState = flipState === 1 ? -1 : 1;
  imageView.style.transform = `scaleX(${flipState})`;
});
flipVerticalButton.addEventListener("click", () => {
  flipVerticalState = flipVerticalState === 1 ? -1 : 1;
  imageView.style.transform = `scaleX(${flipState}) scaleY(${flipVerticalState})`;
});
resetRotationButton.addEventListener("click", () => {
  rotation = 0;
  imageView.style.transform = `rotate(${rotation}deg)`;
  flipState = 1;
  flipVerticalState = 1;
  imageView.style.transform = `scaleX(${flipState}) scaleY(${flipVerticalState})`;
});
saveImageButton.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.src = imageView.style.backgroundImage
    .replace(/^url\(["']?/, "")
    .replace(/["']?\)$/, "");
  image.onload = () => {
    const transformedWidth = imageView.offsetWidth;
    const transformedHeight = imageView.offsetHeight;
    canvas.width = transformedWidth;
    canvas.height = transformedHeight;
    const filteredCanvas = document.createElement("canvas");
    const filteredCtx = filteredCanvas.getContext("2d");
    filteredCanvas.width = transformedWidth;
    filteredCanvas.height = transformedHeight;
    filteredCtx.save();
    filteredCtx.translate(transformedWidth / 2, transformedHeight / 2);
    filteredCtx.rotate((rotation * Math.PI) / 180);
    filteredCtx.filter = imageView.style.filter;
    filteredCtx.drawImage(image, -transformedWidth / 2, -transformedHeight / 2);
    filteredCtx.restore();
    const filteredImageDataURL = filteredCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "edited_image.png";
    link.href = filteredImageDataURL;
    link.click();
  };
});
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
