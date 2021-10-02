const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const userName = document.querySelector('#userName-signup').value.trim();
    const passwordEl = document.querySelector('#password-signup').value.trim();
    const emailEl = document.querySelector('#email-signup').value.trim();
    const nameEl = document.querySelector('#name-signup').value.trim();
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username: userName, password: passwordEl, name: nameEl, email: emailEl }),
      headers: { 'Content-Type': 'application/json' },
    });
 
    if (response.ok) {
      console.log('signed up');
      document.location.replace('/login');
    } else {
      alert("sign up failed");
    }
  
  };
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);