document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name && email && password) {

        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        alert('Registration successful!');

        window.location.href = 'loginpage.html';
        
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert(`Welcome back, ${storedUser.name}!`);
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
