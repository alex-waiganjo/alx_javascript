// Closures
function welcomeMessage(fullName) {   
    return function () {
      alert('Welcome ' + fullName);
    };
  }
  
  // calling the welcomeMessage function and assigning some parameters
  const guillaume = welcomeMessage("Guillaume");
  const alex = welcomeMessage("Alex");
  const fred = welcomeMessage("Fred");