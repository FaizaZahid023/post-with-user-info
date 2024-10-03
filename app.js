// Toggle between Sign Up and Login forms
function toggleForm() {
    const signupBox = document.getElementById('signup-box');
    const loginBox = document.getElementById('login-box');
    signupBox.classList.toggle('hidden');
    loginBox.classList.toggle('hidden');
}

// Store user data for sign-up (this is basic and for demo purposes only)
function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Sign up successful! Now log in.');
        toggleForm();
    } else {
        alert('Please enter a username and password.');
    }
}

// Validate login details
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'post.html';
    } else {
        alert('Invalid username or password');
    }
}