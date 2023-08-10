    // Retrieve the remembered username from local storage
    const rememberedUsername = localStorage.getItem("rememberedUsername");
    if (rememberedUsername) {
      document.getElementById("username").value = rememberedUsername;
      document.getElementById("remember").checked = true;
    }

    document.getElementById("login").addEventListener("click", function() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Replace these values with your actual login credentials
      const validUsername = "admin@sinh";
      const validPassword = "admin@sinh";

      if (username === validUsername && password === validPassword) {
        // Save the username to local storage if "Remember Me" is checked
        if (document.getElementById("remember").checked) {
          localStorage.setItem("rememberedUsername", username);
        } else {
          localStorage.removeItem("rememberedUsername");
        }

        // Redirect to the welcome page on successful login
        window.location.href = "welcome.html";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
