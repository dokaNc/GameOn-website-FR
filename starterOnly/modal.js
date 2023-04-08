// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const alertSuccess = document.querySelector(".alert-success");
const form = document.querySelector("form");

// DOM FORM INPUT Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const numbTournament = document.getElementById("quantity");
const conditionCheckbox = document.getElementById("checkbox1");

// Navbar Responsive Onlick Event
var myTopNav = document.getElementById("myTopnav");
myTopNav.addEventListener("click", () => {
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
  } else {
    myTopNav.className = "topnav";
  }
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch Modal Form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal Form
const closeSpan = document.querySelector(".close");
closeSpan.addEventListener("click", () => {
  modalbg.style.display = "";
});

// Close Alert Message
const closeAlert = document.querySelector(".close-alert");
closeAlert.addEventListener("click", () => {
  alertSuccess.style.display = "none";
});

// Check Minimum 2 Characters and no space at beginning
const checkName = (input) => {
  const regex = new RegExp(/^\s+/);

  if (input.value.length <= 2 || regex.test(input.value)) {
    input.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    input.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
};

// Check Email with Regex
const checkIsEmail = (email) => {
  const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s]{2,}$/);

  if (!regex.test(email.value)) {
    email.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    email.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
};

// Check Date dd/mm/yyyy with Regex
const checkIsDate = (date) => {
  const regex = new RegExp(/^\d{4}-(0?\d|1[0-2])-(0?\d|[12]\d|3[01])$/);

  if (!regex.test(date.value)) {
    date.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    date.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
};

// Check is Integer
const checkNumber = (number) => {
  let convertNum = parseInt(number.value);
  if (!Number.isInteger(convertNum) || convertNum < 0 || convertNum > 99) {
    number.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    number.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
};

// Check Country is Checked
const countryIsChecked = () => {
  const countryRadio = document.querySelector("input[name='location']:checked");
  if (!countryRadio) {
    formData[5].setAttribute("data-error-visible", "true");
    return false;
  } else {
    formData[5].setAttribute("data-error-visible", "false");
    return true;
  }
};

// Check "condition général" is Checked
const conditionIsChecked = (checkbox) => {
  if (!checkbox.checked) {
    checkbox.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    checkbox.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
};

// Form on Submit -> validationForm fonction
form.addEventListener("submit", validationForm);

// Check the Validation of Form
function validationForm(event) {
  event.preventDefault();
  let isChecked = [];
  isChecked.push(
    checkName(firstName),
    checkName(lastName),
    checkIsEmail(email),
    checkIsDate(birthdate),
    checkNumber(numbTournament),
    countryIsChecked(),
    conditionIsChecked(conditionCheckbox)
  );

  if (!isChecked.includes(false)) {
    formValidate();
  }
}

// Show the Alert Success
function formValidate() {
  modalbg.style.display = "none";
  alertSuccess.style.display = "block";
}
