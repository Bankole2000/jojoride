<?php

// TODO: Check if Email is registered on blur event
// TODO: Auto Login
// TODO: Check if User is logged in 

session_start();

  if(isset($_POST["action"]))
  {
    require_once('connect.php');

    // Check if the email is registered
    if($_POST["action"] == "checkEmail")
    {

    }

    // AutoLogin on load if Logged in Before (without Logging out)
    if($_POST["action"] == "autoLogin")
    {

    }

    // Login Normally (Through Login Form)
    if($_POST["action"] == "newLogin")
    {

    }

    

  }
?>