// Scroll ke section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Form contoh
document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulir contoh terkirim!");
});
