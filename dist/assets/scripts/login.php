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
    if($_POST["action"] == "checkEmail")
    {
      $email=$_POST['email'];
        $sql= "SELECT 1 FROM users WHERE email = '{$_POST['email']}'";
        $result = $db->query($sql);
        if($result->num_rows === 1){
            exit('is registered');
        }else{
            exit('is not registered');
        }
    }

    // AutoLogin on load if Logged in Before (without Logging out)
    if($_POST["action"] == "autoLogin")
    {

    }

    // Login Normally (Through Login Form)
    if($_POST["action"] == "newLogin")
    { 
      $email=$_POST['email'];
      $password = $_POST['password'];
        $sql= "SELECT 1 FROM users WHERE email = '{$_POST['email']}' AND password = '{$_POST['password']}'";
        $result = $db->query($sql);
        if($result->num_rows === 1){
            exit('success');
        }else{
            exit('failed');
        }
    }

    

  }
?>