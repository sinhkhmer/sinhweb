// script.js
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Perform your login validation here
    if (username === 'sinh@123' && password === '14326182009202101001') {
                // Redirect to the welcome page on successful login
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
