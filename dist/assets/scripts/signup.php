<?php

// TODO: Check if Email is registered on blur event
// TODO: Auto Login
// TODO: Check if User is logged in 
// FIXME: 

session_start();

  if(isset($_POST["action"]))
  {
    require_once('connect.php');
    
    // Check if the email is registered
    if($_POST["action"] == "checkUsername")
    {
        $sql = "SELECT 1 FROM users WHERE username = '{$_POST['username']}'";
        $result = $db->query($sql);
        if($result->num_rows === 1){
            exit('unavailable');
        }else{
            exit('available');
        }
    }
    if($_POST["action"] == "signup")
    {
      $sql = "SELECT * FROM users WHERE email = '{$_POST['email']}' LIMIT 1";
      $result = $db->query($sql);
      if($result1->num_rows != 1 ){
      $userimage = "../assets/img/users/default.png";
      $signup = "INSERT INTO users (first_name, last_name, username, email, gender, pass, birthdate, profile_image, verification_code ) VALUES ('{$_POST['firstname']}','{$_POST['lastname']}','{$_POST['username']}','{$_POST['email']}', '{$_POST['gender']}', '{$_POST['pass']}', '{$_POST['birthdate']}', '{$userimage}', '{$_POST['code']}')";
      $result1 = $db->query($signup);
      $usermail = $_POST['email'];
      $username = $_POST['firstname'];
      $password = $dfltpassword ;
      $bizname = "Jojoride";
      }
    }

  }
?>