// TODO: Check if logged in
// TODO: Get User Data
// TODO: Set UI 
// let email_reg=/^[a-z]+(_|\.)?[a-z0-9]*@[a-z]+\.[a-z]{2,}$/i;

let name_reg=/^[a-z]{3,}$/i;
let email_reg=/^[a-z]+(_|\.)?[a-z0-9]*@[a-z]+\.[a-z]{2,}$/i;
let password_reg=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/i;

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

// const loginEmail = ;
// const signupEmail = ;
// const firstName = ;
// const lastName = ;
document.querySelector('#first-name').addEventListener('blur', checkName);
document.querySelector('#last-name').addEventListener('blur', checkName);


document.querySelector('#login-email').addEventListener('blur', checkEmail);
document.querySelector('#signup-email').addEventListener('blur', checkEmail);
$(document).on('focusin',`#login-email`,function(){unmark(this)});
$(document).on('focusin',`#signup-email`,function(){unmark(this)});
$(document).on('focusin', '.name', function(){unmark(this)});



// $(document).on('focusout','#login-email', function(){
//   let field = $(this);
//   let intent = $(this).attr('data-intent');
//   let value = $(this).val();
//   let isValid = email_reg.test(value) ? true : false;
// //  flagIfInvalid(field, isValid);
//   console.log(intent + field + " " + value);
// }
// )
