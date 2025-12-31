document.addEventListener("DOMContentLoaded", function() {
  const prevBtn = document.querySelector(".pagination .prev");
  const nextBtn = document.querySelector(".pagination .next");
  const pages = Array.from(document.querySelectorAll(".pagination .page"));

  // 1. Determine the current active page index
  const activeIndex = pages.findIndex(page =>
    page.classList.contains("active")
  );

  // 2. Configure Previous Button Logic
  if (prevBtn) {
    if (activeIndex > 0) {
      prevBtn.href = pages[activeIndex - 1].href;
    } else {
      // Disable if on page 1
      prevBtn.style.opacity = "0.3";
      prevBtn.style.pointerEvents = "none";
      prevBtn.style.cursor = "not-allowed";
    }
  }

  // 3. Configure Next Button Logic
  if (nextBtn) {
    if (activeIndex < pages.length - 1) {
      nextBtn.href = pages[activeIndex + 1].href;
    } else {
      // Disable if on last page
      nextBtn.style.opacity = "0.3";
      nextBtn.style.pointerEvents = "none";
      nextBtn.style.cursor = "not-allowed";
    }
  }

  // 4. Smooth scroll to top when a page is clicked
  document.querySelectorAll(".pagination a").forEach(anchor => {
    anchor.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
