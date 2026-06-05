// Register User

function registerUser() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const role = document.getElementById("signupRole").value;

    const button = document.querySelector(".register-btn");

    if(name === "" || email === "" || password === ""){

        button.innerHTML = "Please Fill All Fields";
        button.style.background = "#dc3545";

        setTimeout(() => {
            button.innerHTML = "Create Account";
            button.style.background = "#233f7a";
        }, 2000);

        return;
    }

    button.innerHTML = "Creating Account...";
    button.disabled = true;

    setTimeout(() => {

        button.innerHTML = "✓ Account Created";
        button.style.background = "#28a745";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 800);

    }, 1000);
}

// Login User

function loginUser() {

    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const button = document.querySelector(".login-btn");

    if(role === "" || email === "" || password === ""){

        button.innerHTML = "Please Fill All Fields";
        button.style.background = "#dc3545";

        setTimeout(() => {
            button.innerHTML = "Login To Dashboard";
            button.style.background = "#233f7a";
        }, 2000);

        return;
    }

    // Save email for dashboard welcome message
    localStorage.setItem("loggedUser", email);

    button.innerHTML = "Logging In...";
    button.disabled = true;

    setTimeout(() => {

        if(role === "dealer"){
            window.location.href = "dealer-dashboard.html";
        } else {
            window.location.href = "buyer-dashboard.html";
        }

    }, 1500);
}

// Dashboard Welcome

window.onload = function () {

    const email = localStorage.getItem("loggedUser");
    const welcome = document.getElementById("welcomeUser");

    if (welcome && email) {

        // Get text before @
        const username = email.split("@")[0];

        welcome.innerHTML = `Welcome, ${username} 👋`;
    }
};
// Logout

function logoutUser() {

    localStorage.removeItem("loggedUser");

    window.location.href = "login.html"
} 

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");

    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
    } else {
        sidebar.classList.add("active");
    }
}

function toggleNavMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
