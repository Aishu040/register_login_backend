
document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    // Check if the user already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        alert("Username already exists. Please choose another.");
    } else {
        // Save the user data to JSON storage
        const user = { username, password };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful. You can now log in.");
        location.href = "login.html";
    }
});
