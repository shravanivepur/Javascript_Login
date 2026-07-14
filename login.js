// Create container
const container = document.createElement("div");

container.style.width = "350px";
container.style.height = "250px";
container.style.margin = "100px auto";
container.style.padding = "20px";
container.style.border = "1px solid #c9c8d2";
container.style.borderRadius = "10px";
container.style.boxShadow = "0 0 20px grey";
container.style.textAlign = "center";
container.style.backgroundColor = "white"

// Heading
const heading = document.createElement("h2");
heading.innerText = "Login";

// Username
const username = document.createElement("input");
username.type = "text";
username.placeholder = "Username";
username.style.width = "90%";
username.style.padding = "10px";
username.style.margin = "10px 0";
//username this is sravani hii
// this is john

// Password
const password = document.createElement("input");
password.type = "password";
password.placeholder = "Password";
password.style.width = "90%";
password.style.padding = "10px";
password.style.margin = "10px 0";

// Button
const button = document.createElement("button");
button.innerText = "Login";
button.style.width = "90%";
button.style.padding = "10px";
button.style.background = "blue";
button.style.color = "white";
button.style.border = "none";
button.style.cursor = "pointer";

// Login Logic
button.addEventListener("click", function () {
    if (username.value === "admin" && password.value === "1234") {
        alert("Login Successful");
    } else {
        alert("Invalid Username or Password");
    }
});

// Append elements
container.appendChild(heading);
container.appendChild(username);
container.appendChild(password);
container.appendChild(button);

document.body.appendChild(container);