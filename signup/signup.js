const signupForm = document.getElementById("signupForm");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Form submission
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateSignUpForm();
});

const validateSignUpForm = () => {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordvalue = confirmPassword.value.trim();

  let isValid = true;
  // Fullname validation
  if (fullnameValue === "") {
    setErrorMsg(fullname, "Full name cannot be blank");
    isValid = false;
  } else if (fullnameValue.length <= 2) {
    setErrorMsg(fullname, "Full name min 3 char");
    isValid = false;
  } else {
    setSuccessMsg(fullname);
  }

  // validate email
  if (emailValue === "") {
    setErrorMsg(email, "email cannot be blank");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setErrorMsg(email, "not a valid email");
    isValid = false;
  } else {
    setSuccessMsg(email);
  }

  // validate password
  if (passwordValue === "") {
    setErrorMsg(password, "password cannot be blank");
    isValid = false;
  } else if (passwordValue.length <= 7) {
    setErrorMsg(password, "min char 8");
    isValid = false;
  } else {
    setSuccessMsg(password);
  }

  // validate confirmPassword
  if (confirmPasswordvalue === "") {
    setErrorMsg(confirmPassword, "confirm password cannot be blank");
    isValid = false;
  } else if (passwordValue !== confirmPasswordvalue) {
    setErrorMsg(confirmPassword, "confirm password cannot be matched");
    isValid = false;
  } else {
    setSuccessMsg(confirmPassword);
  }

  // If all validations pass, save to localStorage and show success message
  if (isValid) {
    const userData = {
      fullname: fullnameValue,
      email: emailValue,
      password: passwordValue,
    };

    // Save to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Show success message
    alert(`Registration Successful!`);

    // Clear the form
    signupForm.reset();

    // Remove success styling
    [fullname, email, password, confirmPassword].forEach((input) => {
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
