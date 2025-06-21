// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Collapsible sections
    const coll = document.querySelectorAll(".collapsible");
    coll.forEach(btn => {
      btn.addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });
