document.addEventListener("DOMContentLoaded", function() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach(button => button.classList.remove("active"));

      // Hide all tab content
      tabContents.forEach(content => content.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      // Show related content
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

/*This JavaScript snippet tells the browser to toggle the `.open` class on the links when the hamburger button (`.menu-toggle`) is clicked, making the CSS work correctly.*/

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});
