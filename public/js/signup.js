const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const userName = document.querySelector('#userName-signup').value.trim();
    const passwordEl = document.querySelector('#password-signup').value.trim();
  
  
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username: userName, password: passwordEl }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log('signed up');
      document.location.replace('/dashboard');
    } else {
      alert("sign up failed");
    }
  
  };
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);