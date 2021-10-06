const loginFormHandler = async (event) => {
  event.preventDefault();
  alert("line 3")
  // Collect values from the login form
  // const userName = document.querySelector('#userName-login').value.trim();
  const passwordEl = document.querySelector('#password-login').value.trim();
  const emailEl = document.querySelector('#email-login').value.trim();
console.log(passwordEl, emailEl)
  if (emailEl && passwordEl) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ emailEl, passwordEl }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/menu');
    } else {
      alert("log in failed");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/menu');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('click', loginFormHandler);
