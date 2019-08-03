// TODO: Auto Login function using localstorage 
// TODO: Validation - Check field on blur
// TODO: Authenticate email on blur
// TODO: Check if Logged in
const timeout = 1000;
// const loader = "<i class='fas fa-spinner fa-pulse'></i>";
const successIcon = '<i class="material-icons" style="color: green;">check_circle</i>';
const failIcon = '<i class="material-icons" style="color: red;">cancel</i>'
const connectionErrorIcon = '<i class="material-icons" style="color: white; font-size: inherit;">signal_wifi_off</i>'
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
                  isdbValid = intent === "login" ? true : false ;
                  isdbValid ? $(`#connection-${target.id}`).html("is OK") : $(`#connection-${target.id}`).html("is already registered"); 
                }else if(response == "is not registered"){
                  isdbValid = intent === "signup" ? true : false ;
                  isdbValid? $(`#connection-${target.id}`).html("is OK") : $(`#connection-${target.id}`).html("is not registered - Sign up?"); 
                }
                flagIfInvalid(target, isdbValid);
            },
            dataType: "text",
            error: function(){
              $(`span[id=connection-${target.id}]`).html(`${connectionError}`);
            },
            timeout: timeout
  })
};

const loginUser = (email, password) => {
  let action = "newLogin";
  $.ajax({
    url: "assets/scripts/login.php",
            method: "POST",
            data: {
            action: action,
            email: email,
            password: password
             },
            success: function(response){
                if(response === "success"){
                  $('#login-btn').html(`Signed In ${successIcon}`).css({'color': 'white'});
                M.toast({html: `Login Successful &nbsp; ${successIcon}`, classes: "success", completeCallback: function(){alert('Your toast was dismissed')}, displayLength: 1000 });
                }else if(response === "failed"){
                
                M.toast({html: `Wrong Email / Password ${failIcon}`});
                enableButton('login-btn', true);
                $('#login-btn').html('Sign in <i class="fas fa-sign-in-alt"></i>').css({'color': 'white'});
                
                }
            },
            dataType: "text",
            error: function(){
              M.toast({html: `Connection Error &nbsp; ${connectionErrorIcon}`});
              enableButton('login-btn', true);
              $('#login-btn').html('Sign in <i class="fas fa-sign-in-alt"></i>').css({'color': 'white'});
            },
            timeout: timeout
  })
};

