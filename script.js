function toggleImages(id) {
  const images = document.getElementById(id);
  if (images.style.display === "block") {
      images.style.display = "none";
  } else {
      images.style.display = "block";
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}
