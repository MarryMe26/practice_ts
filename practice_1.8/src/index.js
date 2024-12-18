let cropper;
const fileInput = document.getElementById('fileInput');
const image = document.getElementById('image');
const cropButton = document.getElementById('cropButton');
const croppedImage = document.getElementById('croppedImage');
const downloadButton = document.getElementById('downloadButton');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file.size > 300 * 1024) {
    alert('Размер файла превышает 300 Кб. Выберите другой файл.');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = () => {
    image.src = reader.result;
    if (cropper) {
      cropper.destroy();
    }
    cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
    });
  };
  reader.readAsDataURL(file);
});

cropButton.addEventListener('click', () => {
  const croppedImageDataUrl = cropper.getCroppedCanvas().toDataURL('image/png');
  croppedImage.src = croppedImageDataUrl;
  croppedImage.style.display = 'block';
  downloadButton.style.display = 'block';
});

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = croppedImage.src;
  link.download = 'cropped-image.png';
  link.click();
});
