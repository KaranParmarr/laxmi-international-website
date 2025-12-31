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

// Trigger animation on load
document.addEventListener("DOMContentLoaded", () => {
  // 1. Intersection Observer for fast scroll reveal
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          if (entry.target.querySelector("#typewriter")) startType();
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // 2. Typewriter Effect
  let hasTyped = false;
  function startType() {
    if (hasTyped) return;
    hasTyped = true;
    const text = "Activated Carbon";
    const target = document.getElementById("typewriter");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }

  // 3. Click Glow Handler
  const clickables = document.querySelectorAll(".feature-card, .stat-item");
  clickables.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.add("clicked");
      setTimeout(() => item.classList.remove("clicked"), 600);
    });
  });
});

/* Initial call to reveal cards in view on load */
document.addEventListener("DOMContentLoaded", () => {
  // Scroll Reveal Intersection Observer
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});

// Click Glow Trigger
function triggerGlow(element) {
  element.classList.add("glow-active");
  setTimeout(() => {
    element.classList.remove("glow-active");
  }, 600); // Glow lasts for 0.6 seconds
}

// body header image hover effect
document.addEventListener("DOMContentLoaded", () => {
  // 1. Scroll Reveal
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // 2. Click Glow Logic
  const stats = document.querySelectorAll(".clickable-box");
  stats.forEach(stat => {
    stat.addEventListener("click", () => {
      stat.classList.add("active-glow");
      setTimeout(() => stat.classList.remove("active-glow"), 600);
    });
  });
});
