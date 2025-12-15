// ===============================
// BLOG PAGINATION SCRIPT
// ===============================

// Detect current page number from URL
const currentPage = (() => {
  const file = window.location.pathname.split("/").pop(); // blog.html, blogp2.html
  if (file === "blog.html") return 1;

  const match = file.match(/blogp(\d+)\.html/);
  return match ? parseInt(match[1]) : 1;
})();

const totalPages = 4; // Update if you add more pages

// Elements
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pageLinks = document.querySelectorAll(".page");

// ===============================
// UPDATE ACTIVE PAGE HIGHLIGHT
// ===============================
pageLinks.forEach(link => {
  const pageNum = link.textContent.trim();
  if (parseInt(pageNum) === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// ===============================
// PREVIOUS BUTTON FUNCTION
// ===============================
if (currentPage > 1) {
  prevBtn.href =
    currentPage === 2 ? "blog.html" : `blogp${currentPage - 1}.html`;
} else {
  prevBtn.classList.add("disabled");
  prevBtn.href = "#";
}

// ===============================
// NEXT BUTTON FUNCTION
// ===============================
if (currentPage < totalPages) {
  nextBtn.href = `blogp${currentPage + 1}.html`;
} else {
  nextBtn.classList.add("disabled");
  nextBtn.href = "#";
}
