const logoutBtn = document.querySelector('#logout');
const logout = async () => {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert("could not log out");
    }
  };
  
logoutBtn.addEventListener('click', logout);