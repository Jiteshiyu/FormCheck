let form = document.querySelector(".form");

// Add submit event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  let isValid = true; // Flag to track form validity

  // Clear previous error messages
  const errorMsgs = document.querySelectorAll(".error-msg");
  errorMsgs.forEach((msg) => {
    msg.textContent = '';
    msg.style.display = 'none';
  });

  let username = this.querySelector("#username").value.trim();
  let email = this.querySelector("#email").value.trim();
  let password = this.querySelector("#password").value.trim();
  let confirmPassword = this.querySelector("#confirm-password").value.trim();

  // Validate username
  if (username === "") {
    showError("username", "*Name is required.");
    isValid = false;
  } else if (username.length < 3) {
    showError("username", "*At least 3 characters.");
    isValid = false;
  }

  // Validate email
  if (email === "") {
    showError("email", "*Email is required.");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError("email", "*Invalid email.");
    isValid = false;
  }

  // Validate password
  if (password === "") {
    showError("password", "*Password is required.");
    isValid = false;
  } else if (password.length < 6) {
    showError("password", "*At least 6 characters.");
    isValid = false;
  }

  // Validate confirm password
  if (confirmPassword === "") {
    showError("confirm-password", "*Confirm Password.");
    isValid = false;
  } else if (confirmPassword !== password) {
    showError("confirm-password", "*Passwords do not match.");
    isValid = false;
  }

  // If the form is valid, show success message
  if (isValid) {
    alert("Registration Successful");
  }
});

// Function to show error messages
function showError(fieldId, msg) {
  const field = document.getElementById(fieldId);
  const errorMsg = field.nextElementSibling;
  errorMsg.textContent = msg;
  errorMsg.style.display = "block";
}

// Function to validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
