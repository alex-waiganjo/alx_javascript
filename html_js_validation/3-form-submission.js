function handleFormSubmit(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var errorMessage = '';
  if (name.trim() === '') {
    errorMessage += 'Please fill in the Name field.\n';
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    errorMessage += 'Please enter a valid email address.\n';
  }
  var errorElement = document.getElementById('error');
  if (errorMessage === '') {
    errorElement.style.color = 'green';
    errorElement.innerHTML = 'Form submitted successfully!';
  } else {
    errorElement.style.color = 'red';
    errorElement.innerHTML = errorMessage;
  }
}
var submitForm = document.getElementById('submitForm');
submitForm.addEventListener('submit', handleFormSubmit);
