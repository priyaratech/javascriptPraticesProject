// Selecting DOM elements
const names = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const terms = document.getElementById("terms");

const nameerror = document.getElementById("nameError");
const emailerror = document.getElementById("emailError");
const passworderror = document.getElementById("passwordError");
const confirmpassworderror = document.getElementById("confirmPasswordError");
const phoneerror = document.getElementById("phoneError");
const addresserror = document.getElementById("addressError");
const termserror = document.getElementById("termsError");

const submitingMessage = document.getElementById("submitingMessage");
const submitSuccessMessage = document.getElementById("submitSuccessMessage");
const invalidMessage = document.getElementById("invalidMessage");

let isvalid = true;

// Validate all fields
const errorHandle = () => {
  isvalid = true;

  // Validate Name
  if (names.value.trim() === "") {
    nameerror.textContent = "Please enter your name";
    isvalid = false;
  } else {
    nameerror.textContent = "";
  }

  // Validate Email
  if (email.value.trim() === "") {
    emailerror.textContent = "Please enter your email";
    isvalid = false;
  } else {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTest.test(email.value.trim())) {
      emailerror.textContent = "Please enter a valid email";
      isvalid = false;
    } else {
      emailerror.textContent = "";
    }
  }

  // Validate Password
  if (password.value === "") {
    passworderror.textContent = "Please enter your password";
    isvalid = false;
  } else if (password.value.length < 8) {
    passworderror.textContent = "Password must be at least 8 characters";
    isvalid = false;
  } else {
    passworderror.textContent = "";
  }

  // Validate Confirm Password
  if (confirmPassword.value === "") {
    confirmpassworderror.textContent = "Please confirm your password";
    isvalid = false;
  } else if (confirmPassword.value !== password.value) {
    confirmpassworderror.textContent = "Passwords do not match";
    isvalid = false;
  } else {
    confirmpassworderror.textContent = "";
  }

  // Validate Phone
  if (phone.value.trim() === "") {
    phoneerror.textContent = "Please enter your phone number";
    isvalid = false;
  } else if (phone.value.trim().length < 10) {
    phoneerror.textContent = "Phone number must be at least 10 digits";
    isvalid = false;
  } else {
    phoneerror.textContent = "";
  }

  // Validate Address
  if (address.value.trim() === "") {
    addresserror.textContent = "Please enter your address";
    isvalid = false;
  } else if (address.value.trim().length < 10) {
    addresserror.textContent = "Address must be at least 10 characters";
    isvalid = false;
  } else {
    addresserror.textContent = "";
  }

  // Validate Terms & Conditions checkbox
  if (!terms.checked) {
    termserror.textContent = "You must agree to the terms and conditions";
    isvalid = false;
  } else {
    termserror.textContent = "";
  }
};

// Event listeners clear error messages
names.addEventListener("input", () => {
    if(names.value.trim() !== "") {
      nameerror.textContent = "";
      invalidMessage.textContent = "";
    }
  });
  email.addEventListener("input", () => {
    if(email.value.trim() !== "") {
      emailerror.textContent = "";
      invalidMessage.textContent = "";
    }
  });
  password.addEventListener("input", () => {
    if(password.value !== "") {
      passworderror.textContent = "";
      invalidMessage.textContent = "";
    }
  });
  confirmPassword.addEventListener("input", () => {
    if(confirmPassword.value !== "") {
      confirmpassworderror.textContent = "";
      invalidMessage.textContent = "";
    }
  });
  phone.addEventListener("input", () => {
    if(phone.value.trim() !== "") {
      phoneerror.textContent = "";
      invalidMessage.textContent = "";
    }
  });
  address.addEventListener("input", () => {
    if(address.value.trim() !== "") {
      addresserror.textContent = "";
      invalidMessage.textContent = "";
    }
  });
  terms.addEventListener("change", () => {
    if(terms.checked) {
      termserror.textContent = "";
      invalidMessage.textContent = "";
    }
  });


// Form submit handler
const submitclick = (event) => {
  event.preventDefault();
  errorHandle();
  if (isvalid) {
    submitingMessage.textContent = "Submitting...";
    submitSuccessMessage.textContent = "";
    invalidMessage.textContent = "";


    setTimeout(() => {
      submitingMessage.textContent = "";
      submitSuccessMessage.textContent = "Form submitted successfully";

      console.log("Name:", names.value);
      console.log("Email:", email.value);
      console.log("Password:", password.value);
      console.log("Confirm Password:", confirmPassword.value);
      console.log("Phone:", phone.value);
      console.log("Address:", address.value);
      console.log("Terms Accepted:", terms.checked);

      names.value = "";
      email.value = "";
      password.value = "";
      confirmPassword.value = "";
      phone.value = "";
      address.value = "";
      terms.checked = false;
      setTimeout(() => {
        submitSuccessMessage.textContent = "";
      }, 3000);
    }, 3000);
  } else {
    submitingMessage.textContent = "";
    submitSuccessMessage.textContent = "";
    invalidMessage.textContent = "sorry! invalid form";
  }
};
