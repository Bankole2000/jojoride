const cyear = document.getElementById("year");

let today = new Date();
cyear.innerHTML = `${today.getFullYear()}`;
