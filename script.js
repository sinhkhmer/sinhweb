// Toggle password visibility
const passwordInput = document.getElementById("pwd");
const eyeIcon = document.getElementById("eye");

eyeIcon.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});

// Handle login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("txt-input").value;
  const password = passwordInput.value;

  // Here you can perform your login validation logic using AJAX or fetch requests.
  // For demonstration purposes, let's just display a message.
  
  if (username === "admin@sinh" && password === "admin@sinh") {
    // Redirect to the welcome page on successful login
    window.location.href = "welcome.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
function restartWebsite() {
  location.reload();
}

