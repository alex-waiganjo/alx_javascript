// Lexical scoping and welcome message
function welcome(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  function displayFullName() {
    alert('Welcome ' + fullName + '!');
  }
  return displayFullName();
}
welcome('Holberton', 'School');


