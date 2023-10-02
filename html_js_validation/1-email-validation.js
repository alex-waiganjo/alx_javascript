function validateEmail() {
  var email = document.getElementById('email').value;
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var errorMessage = '';
  if (!emailRegex.test(email)) {
    errorMessage = 'Please enter a valid email address.';
  }
  var errorElement = document.getElementById('error');
  errorElement.innerHTML = errorMessage;
  // Prevent form submission
  if (errorMessage !== '') {
    event.preventDefault();
  }
}
var form = document.getElementById('emailForm');
form.addEventListener('submit', validateEmail);
