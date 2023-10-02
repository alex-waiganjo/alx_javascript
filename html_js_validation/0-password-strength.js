function validatePassword() {
  var password = document.getElementById('password').value;
  var lengthRegex = /.{8,}/;
  var uppercaseRegex = /[A-Z]/;
  var lowercaseRegex = /[a-z]/;
  var digitRegex = /[0-9]/;
  var specialCharRegex = /[!@#$%^&*]/;

  var errorMessage = '';

  if (!lengthRegex.test(password)) {
    errorMessage += 'Password must be at least 8 characters long';
  }

  if (!uppercaseRegex.test(password)) {
    errorMessage += 'Password must contain at least one uppercase letter.';
  }

  if (!lowercaseRegex.test(password)) {
    errorMessage += 'Password must contain at least one lowercase letter';
  }

  if (!digitRegex.test(password)) {
    errorMessage += 'Password must contain at least one numeric digit';
  }

  if (!specialCharRegex.test(password)) {
    errorMessage +=
      'Password must contain at least one special character (!@#$%^&*)';
  }

  // Display the error
  var errorElement = document.getElementById('error');
  errorElement.innerHTML = errorMessage;

  // Prevent form submission
  if (errorMessage !== '') {
    event.preventDefault();
  }
}

var form = document.getElementById('passwordForm');
form.addEventListener('submit', validatePassword);
