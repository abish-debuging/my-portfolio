// Initialize EmailJS with your Public Key
(function() {
  emailjs.init("ZtiGVTKkMP8xCqWBS"); // 🔑 Replace with your EmailJS Public Key
})();

// Get form & button
const form = document.getElementById("hire-form");
const hireBtn = document.getElementById("hire-btn");

// Function: Validate form
function validateHireForm(form) {
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

// Handle form submission
hireBtn.addEventListener("click", function(event) {
  event.preventDefault(); // 🚫 Prevent page reload

  if (validateHireForm(form)) {
    // Send form data with EmailJS
    emailjs.sendForm(
      "service_cwloyr5",   // 🔑 Replace with your EmailJS Service ID
      "template_3f3x2p5",  // 🔑 Replace with your EmailJS Template ID
      form
    )
    .then(() => {
      alert("✅ Your Hire Me request has been sent successfully!");
      form.reset();
      clearValidation(form);
    })
    .catch((error) => {
      alert("❌ Failed to send. Error: " + JSON.stringify(error));
    });
  } else {
    alert("⚠️ Please fill out all fields before submitting.");
  }
});
