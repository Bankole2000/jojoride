// TODO: Auto Login function using localstorage 
// TODO: Validation - Check field on blur
// TODO: Authenticate email on blur
// TODO: Check if Logged in


const test = (arg) => {
  window.alert(`you passed this ${arg}`);
};

const checkIfRegistered = ({target}) => {
  let email = target.value;
  let intent = target.getAttribute(data-intent);
  let action = "checkEmail";
  $.ajax({
    url: "scripts/login.php",
            method: "POST",
            data: {
            action: action,
            email: email,
             },
            success: function(response){
                if(response == "registered"){
                    alert("is registered");
                // If intent == Login set login field as valid, else if intent == Signup set signup field as invalid
                  isValid = intent == "login" ? true : false ; 

                }else if(response == "not registered"){
                    alert("is not registered");
                // If intent == Login set login field as valid, else if intent == Signup set signup field as invalid
                  isValid = intent == "signup" ? true : false ;
                }
                flagIfInvalid(target, isValid);
            },
            dataType: "text",
            error: function(){
                alert("Connection Error");
            },
            timeout: timeout
  })
}

const connectionError = (field) => {
  document.getElementById(`connection-${field}`);
}

const flagIfInvalid = (field, isValid) => {
  isValid ? field.classList.add("valid") : field.classList.remove("invalid");
};