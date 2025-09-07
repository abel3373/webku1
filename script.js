// Scroll ke section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Form handler
document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Permintaan berhasil dikirim! Kami akan menghubungi Anda segera.");
});
