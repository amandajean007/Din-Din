const signupFormHandler = async (event) => {
  event.preventDefault();

const username = document.querySelector('#username-signup')
const password = document.querySelector('#password-signup')
const email = document.querySelector('#email-signup')
const name = document.querySelector('#name-signup')
// console.log(username);
if (username && password && email && name) {
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({ username, password, name, email }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    console.log('************signed up************');
    document.location.replace('/menu');
  } else {
    console.log('************FAILED************');
    alert("sign up failed");
    document.location.replace('/signup');
  }
console.log(response);
}
};
// document.querySelector('#signup-form').addEventListener("submit", signupFormHandler());

// document.querySelector("#signup-form").addEventListener("click", function(event) {
//   console.log(event);
//   signupFormHandler(event);
//   event.preventDefault();
// }, false);

document
.querySelector('#signup-form')
.addEventListener('submit', signupFormHandler);
