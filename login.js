document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission

        // Get input values
        const mobileNumber = document.getElementById('loginMobile').value;
        const password = document.getElementById('loginPassword').value;

        // Perform validation
        if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        // Authenticate user with local database
        authenticateUser(mobileNumber, password);
    });

    function authenticateUser(mobileNumber, password) {
        // Simulate local database lookup (replace with actual database interaction)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.mobileNumber === mobileNumber && user.password === password);

        if (user) {
            // Successful authentication
            alert('Login successful!');
            // Redirect the user to another page after successful login
            window.location.href = 'music.html'; // Change 'dashboard.html' to the desired page URL
        } else {
            // Authentication failed
            alert('Invalid mobile number or password. Please try again.');
        }
    }
});