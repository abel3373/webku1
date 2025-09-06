// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Lucide icons init
lucide.createIcons();

// Form contoh
document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulir terkirim (contoh). Hubungi kontak langsung untuk pemesanan nyata.");
});
