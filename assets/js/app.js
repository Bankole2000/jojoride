// GET UI Elements
const loginMenuBtn = Array.from(document.querySelectorAll(".login"));
const loginMenu = document.getElementById("login-menu");
const rideMenu = document.getElementById("ride-menu");
const signupMenuBtn = Array.from(document.querySelectorAll(".signup"));
const offerRideBtn = Array.from(document.querySelectorAll(".add-ride"));
const cyear = document.getElementById("year");

// Set Initial State of Menus
let showLoginMenu = false,
  showRideMenu = false,
  showLoginForm = false,
  showSignupForm = false,
  showRideSearchForm = false,
  showRideAddForm = false;

// Copy right year
let today = new Date();
cyear.innerHTML = `${today.getFullYear()}`;

// Events
loginMenuBtn.forEach(elem => {
  elem.addEventListener("click", showLoginModal);
});
offerRideBtn.forEach(elem => {
  elem.addEventListener("click", showRideModal);
});

function showLoginModal(e) {
  e.preventDefault();
  if (!showLoginMenu) {
    loginMenu.classList.add("show");
    rideMenu.classList.remove("show");

    // Reset Menu State
    showLoginMenu = true;
    showRideMenu = false;
  } else {
    loginMenu.classList.remove("show");

    showLoginMenu = false;
  }
}

function showRideModal(e) {
  e.preventDefault();
  if (!showRideMenu) {
    rideMenu.classList.add("show");
    loginMenu.classList.remove("show");

    showLoginMenu = false;
    showRideMenu = true;
  } else {
    rideMenu.classList.remove("show");

    showRideMenu = false;
  }
}
