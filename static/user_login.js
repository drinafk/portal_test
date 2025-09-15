// Get elements from the DOM
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginFormContainer = document.getElementById('login-form-container');
const signupFormContainer = document.getElementById('signup-form-container');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const signupUsernameInput = document.getElementById('signup-username');
const signupPasswordInput = document.getElementById('signup-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const messageBox = document.getElementById('message-box');

// Function to display a message to the user
function showMessage(message, type) {
    messageBox.textContent = message;
    messageBox.className = `message-box ${type}`;
}

// Handle tab clicks
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginFormContainer.classList.add('active');
    signupFormContainer.classList.remove('active');
    // Clear any previous messages
    messageBox.className = 'message-box';
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupFormContainer.classList.add('active');
    loginFormContainer.classList.remove('active');
    // Clear any previous messages
    messageBox.className = 'message-box';
});

// Handle login form submission
loginForm.addEventListener('submit', (event) => {
    // Prevent the default form submission which reloads the page
    event.preventDefault();

    // Clear previous messages
    messageBox.className = 'message-box';

    // Get the values from the input fields
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Simple validation check
    if (username === '' || password === '') {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    // Simulate a login process
    console.log('Login attempt...');
    console.log('Username:', username);
    console.log('Password:', password);

    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    showMessage('Successfully signed in!', 'success');
});

// Handle sign-up form submission
signupForm.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Clear previous messages
    messageBox.className = 'message-box';

    const username = signupUsernameInput.value.trim();
    const password = signupPasswordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Simple validation
    if (username === '' || password === '' || confirmPassword === '') {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showMessage('Passwords do not match.', 'error');
        return;
    }

    // Simulate sign-up process
    console.log('Sign-up attempt...');
    console.log('Username:', username);
    console.log('Password:', password);
    showMessage('Account created successfully! You can now log in.', 'success');
});