// TODO: Auto Login function using localstorage 
// TODO: Validation - Check field on blur
// TODO: Authenticate email on blur
// TODO: Check if Logged in
const timeout = 2000;
const loader = "<i class='fas fa-spinner fa-pulse'></i>";
const connectionError = "Unable to connect <i class='fas fa-broadcast-tower'></i>";
const test = (arg) => {
  window.alert(`you passed this ${arg}`);
};

const checkIfRegistered = (target) => {
  let email = target.value;
  let intent = target.getAttribute('data-intent');
  let action = "checkEmail";
  $(`span[id=connection-${target.id}]`).html(`Checking ${loader}`);
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
              //  alert("Connection Error");
              $(`span[id=connection-${target.id}]`).html(`${connectionError}`);
            },
            timeout: timeout
  })
}

