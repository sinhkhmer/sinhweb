document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");

    // Enable the login button after a delay
    setTimeout(function() {
        loginButton.removeAttribute("disabled");
    }, 60000);

    // Simulate a basic verification process
    loginButton.addEventListener("click", function() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Simulate a backend check (replace this with your actual backend logic)
        if (username === "admin@sinh" && password === "admin@sinh") {
            window.location.href = "welcome.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
