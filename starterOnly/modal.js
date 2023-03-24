// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

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

// Check Minimum 2 Characters
const checkMinimumLength = (input, formData, event) => {
  return input.value.length <= 2
    ? ((formData.dataset.errorVisible = true), event.preventDefault())
    : (formData.dataset.errorVisible = false);
};

// Check Email with Regex
const checkIsEmail = (email, formData, event) => {
  const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s]{2,}$/);

  return !regex.test(email.value)
    ? ((formData.dataset.errorVisible = true), event.preventDefault())
    : (formData.dataset.errorVisible = false);
};

// Check Date dd/mm/yyyy with Regex
const checkIsDate = (date, formData, event) => {
  const regex = new RegExp(/^\d{4}-(0?\d|1[0-2])-(0?\d|[12]\d|3[01])$/);

  return !regex.test(date.value)
    ? ((formData.dataset.errorVisible = true), event.preventDefault())
    : (formData.dataset.errorVisible = false);
};

// Check is Integer
const checkNumber = (number, formData, event) => {
  return !Number.isInteger(number) || number < 0 || number > 99
    ? ((formData.dataset.errorVisible = true), event.preventDefault())
    : (formData.dataset.errorVisible = false);
};

// Check Country is Checked
const countryIsChecked = (formData, event) => {
  const countryRadio = document.querySelector("input[name='location']:checked");
  return !countryRadio
    ? ((formData.dataset.errorVisible = true), event.preventDefault())
    : (formData.dataset.errorVisible = false);
};

// Check "condition général" is Checked
const conditionIsChecked = (checkbox, formData, event) => {
  return !checkbox.checked
    ? ((formData.dataset.errorVisible = true), event.preventDefault())
    : (formData.dataset.errorVisible = false);
};

// Form on Submit
addEventListener("submit", (event) => {
  checkMinimumLength(firstName, formData[0], event);
  checkMinimumLength(lastName, formData[1], event);
  checkIsEmail(email, formData[2], event);
  checkIsDate(birthdate, formData[3], event);
  checkNumber(parseInt(numbTournament.value), formData[4], event);
  countryIsChecked(formData[5], event);
  conditionIsChecked(conditionCheckbox, formData[6], event);
});
