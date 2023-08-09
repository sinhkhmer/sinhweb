document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const otpInput = document.getElementById("otp");
    const sendOTPButton = document.getElementById("send-otp-button");
    const loginButton = document.getElementById("login-button");

    // Enable the login button after a delay
    setTimeout(function() {
        loginButton.removeAttribute("disabled");
    }, 60000);

    // Simulate sending OTP
    sendOTPButton.addEventListener("click", function() {
        // Simulate sending OTP logic here
        alert("OTP sent to your registered email/mobile.");
    });

    loginButton.addEventListener("click", function() {
        // Simulated verification logic
        const username = usernameInput.value;
        const password = passwordInput.value;
        const otp = otpInput.value;

        if (username === "user" && password === "pass" && otp === "12345678") {
            window.location.href = "welcome.html";
        } else {
            alert("Invalid username, password, or OTP. Please try again.");
        }
    });
});
