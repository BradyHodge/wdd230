document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var errorMessageDiv = document.getElementById('error-message');
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        errorMessageDiv.textContent = 'Passwords do not match.';
        password.value = '';
        confirmPassword.value = '';
        password.focus();
    } else {
        errorMessageDiv.textContent = '';
    }
});