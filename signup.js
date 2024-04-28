document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission

        // Get input values
        const mobileNumber = document.getElementById('signupMobile').value;
        const password = document.getElementById('signupPassword').value;

        // Perform validation
        if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        // Save user data (replace with actual save logic)
        saveUser(mobileNumber, password);
    });

    function saveUser(mobileNumber, password) {
        // Simulate saving user data to a local database (replace with actual save logic)
        // For demonstration, I'm storing user data in localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ mobileNumber, password });
        localStorage.setItem('users', JSON.stringify(users));

        // Alert user that signup was successful
        alert('Signup successful!');

        // Redirect the user to another page after successful signup
        window.location.href = 'index.html'; // Change 'login.html' to the desired page URL
    }
});
