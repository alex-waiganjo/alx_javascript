function generateInputFields() {
  var numFields = parseInt(document.getElementById('numFields').value);
  var inputContainer = document.getElementById('inputContainer');
  inputContainer.innerHTML = '';
  for (var i = 1; i <= numFields; i++) {
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'field' + i;
    input.placeholder = 'Field ' + i;
    inputContainer.appendChild(input);
  }
}
var numFieldsDropdown = document.getElementById('numFields');
numFieldsDropdown.addEventListener('change', generateInputFields);
function validateForm(event) {
  var inputFields = document.querySelectorAll('#inputContainer input');
  for (var i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value.trim() === '') {
      alert('Please fill in all fields.');
      event.preventDefault();
      return;
    }
  }
}

var dynamicForm = document.getElementById('dynamicForm');
dynamicForm.addEventListener('submit', validateForm);
