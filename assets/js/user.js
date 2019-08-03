// TODO: Check if logged in
// TODO: Get User Data
// TODO: Set UI 

const name_reg=/^[a-z]{3,}$/i;
const email_reg=/^[a-z]+(_|\.)?[a-z0-9]*@[a-z]+\.[a-z]{2,}$/i;
const password_reg= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})");
const date_reg = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
const loader = "<i class='fas fa-spinner fa-pulse'></i>";

const markAsValid = (field) => {
  field.classList.add("valid");
  field.classList.remove("invalid");
  $(`label[for=${field.id}]`).css({
    'color': 'green'
  })
}

const markAsInvalid = (field) => {
  field.classList.remove("valid");
  field.classList.add("invalid");
    $(`label[for=${field.id}]`).css({
    'color': 'red'
  })
}

const unmark = (field) => {
  field.classList.remove("valid");
  field.classList.remove("invalid");
  $(`label[for=${field.id}]`).css({
    'color': 'grey'
  })
  $(`span[id=connection-${field.id}]`).html("");
}

const flagIfInvalid = (field, isValid) => {
  isValid ? markAsValid(field) : markAsInvalid(field);
};

const checkEmail = ({target}) => {
  const intent = target.getAttribute('data-intent');
  const value = target.value;
  isValid = email_reg.test(value) ? true : false ;
  isValid ? checkIfRegistered(target) : flagIfInvalid(target, isValid);
  return isValid;
} 

const checkName = ({target}) => {
  const value = target.value;
  isValid = name_reg.test(value) ? true : false;
  flagIfInvalid(target, isValid);
  isValid ? $(`span[id=connection-${target.id}]`).html("is Ok") : $(`span[id=connection-${target.id}]`).html("A-Z only > 3");
  return isValid; 
}

const checkAge = (target) => {
  const value = new Date(target.value);
  const ageinSec = today - value;
  isValid = ageinSec > 0 ? true: false;
  let noOfYears = Math.floor(ageinSec / (365 * 24 * 60 * 60 * 1000));
  isofAge = noOfYears >= 18 && noOfYears < 120 ? true : false;
  flagIfInvalid(target, isofAge); 
  console.log(isofAge + " " + ageinSec + " " + typeof(ageinSec) + " " + noOfYears +"years old");
  isofAge ? $(`span[id=connection-${target.id}]`).html("is Ok") : $(`span[id=connection-${target.id}]`).html("must be > 18"); 
  return isofAge;
}

const enableButton = (targetId, isValid) => {
  $(`#${targetId}`).toggleClass('disabled', !isValid);
  console.log(targetId);
}

document.querySelector('#first-name').addEventListener('blur', checkName);", , "
document.querySelector('#last-name').addEventListener('blur', checkName);
document.querySelector('#login-email').addEventListener('blur', checkEmail);
document.querySelector('#signup-email').addEventListener('blur', checkEmail);
$(document).on('focusin',`#login-email`,function(){unmark(this)});
$(document).on('focusin',`#signup-email`,function(){unmark(this)});
$(document).on('focusin', '.name', function(){unmark(this)});
$(document).on('keyup', '#birthdate', function(){checkAge(this)});
$("#login-email, #login-password").on('keyup', function(){
  const email = $('#login-email').val();
  const password = $('#login-password').val();
  isValid = email_reg.test(email) && password_reg.test(password) ? true : false;
  console.log(`${isValid} ${email} ${password}`);
  enableButton('login-btn', isValid);
})
$('#login-btn').click(()=>{
  $('#login-btn').html(`Signing In ${loader}`).addClass('disabled');
  loginUser($('#login-email').val(), $('#login-password').val());
})



// $(document).on('focusout','#login-email', function(){
//   let field = $(this);
//   let intent = $(this).attr('data-intent');
//   let value = $(this).val();
//   let isValid = email_reg.test(value) ? true : false;
// //  flagIfInvalid(field, isValid);
//   console.log(intent + field + " " + value);
// }
// )
