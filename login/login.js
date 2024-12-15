const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Function to auto-fill form
const autoFillLoginForm = () => {
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  if (storedUserData) {
    email.value = storedUserData.email || "";
    password.value = storedUserData.password || "";

    // Optionally show success styling for pre-filled fields
    if (storedUserData.email) setSuccessMsg(email);
    if (storedUserData.password) setSuccessMsg(password);
  }
};

// Call auto-fill function when page loads
window.addEventListener("DOMContentLoaded", autoFillLoginForm);

// Form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateLoginForm();
});

const validateLoginForm = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  let isValid = true;

  // validate email
  if (emailValue === "") {
    setErrorMsg(email, "Email cannot be blank");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorMsg(email, "Not a valid email");
    isValid = false;
  } else {
    setSuccessMsg(email);
  }

  // validate password
  if (passwordValue === "") {
    setErrorMsg(password, "Password cannot be blank");
    isValid = false;
  } else if (passwordValue.length <= 7) {
    setErrorMsg(password, "Minimum 8 characters required");
    isValid = false;
  } else {
    setSuccessMsg(password);
  }

  // If all validations pass, check credentials and login
  if (isValid) {
    // Show success message
    alert("Login Successful!");

    // Clear the form
    loginForm.reset();

    // Remove success styling
    [email, password].forEach((input) => {
      input.parentElement.className = "form-group";
    });
  }
};

function setErrorMsg(input, errormsgs) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector("small");
  formcontrol.className = "form-group error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-group success";
}

// Password toggle functionality
document.querySelectorAll(".toggle-password").forEach((icon) => {
  icon.addEventListener("click", function () {
    const input = this.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
      this.classList.remove("fa-eye");
      this.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      this.classList.remove("fa-eye-slash");
      this.classList.add("fa-eye");
    }
  });
});

// Email validation function
const isEmail = (email) => {
  const atSymbol = email.indexOf("@");
  const dot = email.lastIndexOf(".");
  return atSymbol > 0 && dot > atSymbol + 2 && dot < email.length - 1;
};
