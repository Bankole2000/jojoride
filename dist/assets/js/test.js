const test = (arg) => {
  window.alert(`you passed this ${arg}`);
};

const testName = () => {

}

const testDate = () => {

}



const flagIfInvalid = (field, isValid) => {
  isValid ? field.classList.add("valid") : field.classList.remove("invalid");
};