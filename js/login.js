const loginBtn = document
  .getElementById("login-btn")
  .addEventListener("click", function () {
    //? 1. get the username
    const username = document.getElementById("username").value;
    console.log(username);

    //? 2. get the password
    const password = document.getElementById("password").value;
    console.log(password);

    if (username === "admin" && password === "admin123") {
      alert("Logged In Successful");
      window.location.assign("main.html");
    } else {
      alert("Invalid Credentials");
      return;
    }
  });
