// Body Styling
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "linear-gradient(to right, #4facfe, #00f2fe)";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

// Container
const container = document.createElement("div");
container.style.width = "400px";
container.style.background = "#fff";
container.style.padding = "30px";
container.style.borderRadius = "10px";
container.style.boxShadow = "0 0 15px rgba(14, 34, 211, 0.89)";
container.style.textAlign = "center";

// Heading
const heading = document.createElement("h2");
heading.innerText = "Create Account";

// Function to Create Input Fields
function createInput(type, placeholder) {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.style.width = "100%";
    input.style.padding = "10px";
    input.style.margin = "10px 0";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "5px";
    input.style.boxSizing = "border-box";
    return input;
}

// Inputs
const fullName = createInput("text", "Full Name");
const email = createInput("email", "Email Address");
const phone = createInput("tel", "Phone Number");
const password = createInput("password", "Password");
const confirmPassword = createInput("password", "Confirm Password");

// Button
const button = document.createElement("button");
button.innerText = "Sign Up";
button.style.width = "100%";
button.style.padding = "10px";
button.style.marginTop = "15px";
button.style.background = "#007bff";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";

// Button Click Event
button.addEventListener("click", function () {

    if (
        fullName.value === "" ||
        email.value === "" ||
        phone.value === "" ||
        password.value === "" ||
        confirmPassword.value === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        return;
    }

    alert("Signup Successful!");
});

// Login Link
const loginText = document.createElement("p");
loginText.innerHTML = `Already have an account? <a href="#">Login</a>`;

// Append Elements
container.appendChild(heading);
container.appendChild(fullName);
container.appendChild(email);
container.appendChild(phone);
container.appendChild(password);
container.appendChild(confirmPassword);
container.appendChild(button);
container.appendChild(loginText);

document.body.appendChild(container);