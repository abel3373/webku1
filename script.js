// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-amber-900/90", "backdrop-blur");
  } else {
    navbar.classList.remove("bg-amber-900/90", "backdrop-blur");
  }
});

// Footer tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Form handler
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Pesanan Anda berhasil dikirim!");
});
