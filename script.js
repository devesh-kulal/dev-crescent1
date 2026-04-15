// Simple interaction (optional)

// Smooth scroll (if links added later)
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(link.getAttribute("href"))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Example: button click
document.querySelector(".contact-btn").addEventListener("click", () => {
  alert("Redirecting to Contact Page...");
});
