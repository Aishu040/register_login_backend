document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Retrieve user data from JSON storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful.");
        // Redirect to the app's main page or perform the necessary actions.
        location.href = "welcome.html";
    } else {
        alert("Login failed. Invalid credentials.");
    }
});

