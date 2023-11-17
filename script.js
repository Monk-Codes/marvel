const slider = document.querySelector(".slider");
function flow(e) {
 const img = document.querySelectorAll(".img");

 if (e.keyCode === 37 || e.keyCode === 39) {
  if (e.keyCode == 37) {
   // If left arrow, move the last image to the beginning
   slider.prepend(img[img.length - 1]);
  } else if (e.keyCode == 39) {
   // If right arrow, move the first image to the end
   slider.append(img[0]);
  }
 }

 // Check if the click event happened on the next or prev elements
 if (e.target.matches(".next")) {
  slider.append(img[0]);
 } else if (e.target.matches(".prev")) {
  slider.prepend(img[img.length - 1]);
 }
}

document.addEventListener("click", flow, false);
document.addEventListener("keydown", flow, false);
