const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  // const userName = document.querySelector('#userName-login').value.trim();
  const passwordEl = document.querySelector('#password-login').value.trim();
  const emailEl = document.querySelector('#email-login').value.trim();

  
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email: emailEl, password: passwordEl }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/menu');
    } else {
      alert("log in failed");
    }
};


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
  