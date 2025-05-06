document.getElementById('showPassword').addEventListener('change', function () {
  const passwordField = document.getElementById('password');
  passwordField.type = this.checked ? 'text' : 'password';
});

function signIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  
  alert("Logged in with\nEmail: " + email + "\nPassword: " + password);
}
