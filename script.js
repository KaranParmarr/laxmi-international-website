function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function closeMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.remove("active");
}
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.addEventListener("click", closeMenu);
});

const track = document.querySelector(".blog-card-track");
const nextBtn = document.querySelector(".blog-next");
const prevBtn = document.querySelector(".blog-prev");

let position = 0;
const cardWidth = 350; // includes gap
const cards = document.querySelectorAll(".blog-card");
const totalCards = cards.length;
const maxMove = -(cardWidth * (totalCards - 1)); // last index position

/* Next Button */
nextBtn.addEventListener("click", () => {
  position -= cardWidth;

  // If last card passed → reset to start
  if (position < maxMove) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
});

/* Previous Button */
prevBtn.addEventListener("click", () => {
  position += cardWidth;

  // If before first card → go to last card
  if (position > 0) {
    position = maxMove;
  }

  track.style.transform = `translateX(${position}px)`;
});

/* Scroll Animation */
function horizontalScrollAnimation() {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120) {
      card.style.opacity = 1;
      card.style.transform = "translateX(0)";
    }
  });
}

window.addEventListener("scroll", horizontalScrollAnimation);

/* Initial Animation Setup */
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateX(70px)";
  card.style.transition = "0.6s ease";
});
