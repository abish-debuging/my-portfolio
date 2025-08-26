
// Initialize EmailJS with your Public Key
(function() {
  emailjs.init("ZtiGVTKkMP8xCqWBS"); // 🔑 Replace with your EmailJS Public Key
})();

// Get Contact form & button
const contactForm = document.getElementById("contact-form");
const contactBtn = document.getElementById("contact-btn");

// Function: Validate Contact Form
function validateContactForm(form) {
  let valid = true;

  // Clear old styles
  clearValidation(form);

  // Check each input
  form.querySelectorAll("input, textarea").forEach((input) => {
    if (!input.value.trim()) {
      valid = false;
      input.style.border = "2px solid red";
    }
  });

  return valid;
}

// Function: Reset validation styles
function clearValidation(form) {
  form.querySelectorAll("input, textarea").forEach((input) => {
    input.style.border = "none";
  });
}

// Handle Contact form submission
contactBtn.addEventListener("click", function(event) {
  event.preventDefault(); // 

  if (validateContactForm(contactForm)) {
    // Send form data with EmailJS
    emailjs.sendForm(
      "service_cwloyr5",    // 🔑 Replace with your EmailJS Service ID
      "template_xnauqmq",   // 🔑 Replace with your EmailJS Template ID for Contact
      contactForm
    )
    .then(() => {
      alert("✅ Your message has been sent successfully!");
      contactForm.reset();
      clearValidation(contactForm);
    })
    .catch((error) => {
      alert("❌ Failed to send. Error: " + JSON.stringify(error));
    });
  } else {
    alert("⚠️ Please fill out all fields before submitting.");
  }
});
