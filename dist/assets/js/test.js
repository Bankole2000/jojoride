// TODO: Auto Login function using localstorage 
// TODO: Validation - Check field on blur
// TODO: Authenticate email on blur
// TODO: Check if Logged in
const timeout = 5000;

const test = (arg) => {
  window.alert(`you passed this ${arg}`);
};

const checkIfRegistered = (target) => {
  let email = target.value;
  let intent = target.getAttribute('data-intent');
  let action = "checkEmail";
  $(`span[id=connection-${target.id}]`).html('Checking <i class="fas fa-spinner fa-spin"><i>')
  $.ajax({
    url: "assets/scripts/login.php",
            method: "POST",
            data: {
            action: action,
            email: email,
             },
            success: function(response){
                if(response == "is registered"){
                 
                // If intent == Login set login field as valid, else if intent == Signup set signup field as invalid
                  isdbValid = intent === "login" ? true : false ;
                  isdbValid ? $(`#connection-${target.id}`).html("is OK") : $(`#connection-${target.id}`).html("is already registered"); 

                }else if(response == "is not registered"){
                 
                // If intent == Login set login field as valid, else if intent == Signup set signup field as invalid
                  isdbValid = intent === "signup" ? true : false ;
                  isdbValid? $(`#connection-${target.id}`).html("is OK") : $(`#connection-${target.id}`).html("is not registered - Sign up?"); 

                }
                flagIfInvalid(target, isdbValid);
                console.log(response)
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
