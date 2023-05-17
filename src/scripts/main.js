let count = 1;
document.getElementById("radio1").checked = true;

const nextImage = () => {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById(`radio${count}`).checked = true;
};

setInterval(() => {
  nextImage();
}, 3000);
