function toggleImages() {
  var moreImages = document.getElementById("moreImages");
  if (moreImages.style.display === "none" || moreImages.style.display === "") {
      moreImages.style.display = "grid";
  } else {
      moreImages.style.display = "none";
  }
}
