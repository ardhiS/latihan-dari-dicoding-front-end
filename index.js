const gambar = document.getElementById("gambar");
const buttons = document.querySelectorAll(".button");
const links = document.getElementById("links");
const dicoding = document.getElementById("dicodingLink");

dicoding.innerText = "Belajar Programming di Dicoding";
dicoding.innerHTML = "<i>Belajar Programming di Dicoding</i>";
const playButton = buttons[3];
const playButtonElement = playButton.children[0];
playButtonElement.setAttribute("type", "submit");
gambar.setAttribute("width", 300);
gambar.setAttribute("height", 215);

for (const button of buttons) {
  console.log((button.children[0].style.borderRadius = "20px"));
}
