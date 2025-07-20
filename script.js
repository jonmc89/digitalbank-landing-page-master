// Mobile Nav Functionality
const mobileNav = document.getElementById("mobileNav");
const mobileNavContainer = document.getElementById("mobileNavContainer");
const closeBtn = document.getElementById("closeBtn");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  mobileNavContainer.classList.add("active");
  mobileNav.classList.add("active");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  mobileNavContainer.classList.remove("active");
  mobileNav.classList.remove("active");
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
});
