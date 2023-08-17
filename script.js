document.getElementById("login").addEventListener("click", function() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Replace these values with your actual login credentials
      const validUsername = "admin";
      const validPassword = "26166314";

      if (username === validUsername && password === validPassword) {
        // Redirect to the welcome page on successful login
        window.location.href = "welcome.html";
      } else {
        alert("ឈ្មោះអ្នកប្រើប្រាស់ ឬ ពាក្យសម្ងាត់មិនត្រឹមត្រូវ។ សូមព្យាយាមម្តងទៀត។");
      }
    });
