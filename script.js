document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("testimonials-slider");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const cards = document.querySelectorAll(".testimonial-card");
  const cardWidth = cards[0].offsetWidth + 30; // width + gap

  let currentPosition = 0;
  const maxPosition = (cards.length - 1) * cardWidth;

  function updateButtons() {
    prevBtn.disabled = currentPosition === 0;
    nextBtn.disabled = currentPosition >= maxPosition;
  }

  function scrollTo(position) {
    slider.scrollTo({
      left: position,
      behavior: "smooth",
    });
    currentPosition = position;
    updateButtons();
  }

  prevBtn.addEventListener("click", () => {
    const newPosition = Math.max(0, currentPosition - cardWidth);
    scrollTo(newPosition);
  });

  nextBtn.addEventListener("click", () => {
    const newPosition = Math.min(maxPosition, currentPosition + cardWidth);
    scrollTo(newPosition);
  });

  // Initialize
  updateButtons();

  // Handle window resize
  window.addEventListener("resize", () => {
    const newCardWidth = cards[0].offsetWidth + 30;
    const ratio = currentPosition / cardWidth;
    currentPosition = Math.round(ratio * newCardWidth);
    scrollTo(currentPosition);
  });
});

// Form submission handler
function handleFormSubmit() {
  // Get form elements
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const submitBtn = document.querySelector("#contact-form .submit-btn");
  const contactContent = document.getElementById("contact-content");
  const successMessage = document.getElementById("success-message");

  // Validate inputs
  if (!email || !subject || !message) {
    alert("Please fill in all fields");
    return;
  }

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  // Simulate form processing (replace with actual fetch() in production)
  setTimeout(() => {
    // Hide form and show success message
    contactContent.style.display = "none";
    successMessage.style.display = "block";

    // Reset button
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    submitBtn.disabled = false;

    console.log("Form submitted:", { email, subject, message });
  }, 1500);
}

// Reset form function
function resetForm() {
  document.getElementById("contact-form").reset();
  document.getElementById("contact-content").style.display = "flex";
  document.getElementById("success-message").style.display = "none";

  // Reset floating labels
  document.querySelectorAll(".form-group label").forEach((label) => {
    label.style.top = "15px";
    label.style.left = "15px";
  });
}
// nav menu toggle
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

