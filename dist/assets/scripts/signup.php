<?php

// TODO: Check if Email is registered on blur event
// TODO: Auto Login
// TODO: Check if User is logged in 
// FIXME: 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require_once '../vendor/autoload.php';


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
      $userusername = $_POST['username'];
      $code = $_POST['code'];
      $password = "Your Chosen Password" ;
      $bizname = "Jojoride"; 

      include_once "../vendor/phpmailer/phpmailer/src/PHPMailer.php";
		  $mail = new PHPMailer();
		
  		$mail->Host = 'smtp.gmail.com'; 
		
	  	$mail->Username = 'techybanky@gmail.com';                 // SMTP username
    	$mail->Password = '1.41421356237';                           // SMTP password
		  $mail->SMTPSecure = 'ssl';     
    	$mail->Port = 465;
    	$mail->setFrom('no-reply@jojoride.com', 'Jojoride');
		  $mail->addAddress($usermail, $username);
		  $mail->addAddress('techybanky@gmail.com'); // Admin Mail CC
			
		  // CONTENT 
		
		  $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = 'Jojoride Verification Code';
      $mail->Body = 'Welcome to '.$bizname.'. 
      Hello '.$username.'. Welcome to '.$bizname.' and Congratulations on Signing up. Here are your Login Details: 
      Username: '.$userusername.'. 
      Email:  '.$usermail.'. 
      Password: '.$password.'.
      Verification Code: '.$code.' 
      Please Enter the verification code to verify your email. Congratulations again and Welcome to '.$bizname.'. 
      
      You got this mail because we think you tried to sign up on www.'.$bizname.'.com. If you think we made a mistake, just ignore this message.';
      
      $mail->AltBody = 'Welcome to '.$bizname.'. 
		  Hello '.$username.'. Welcome to '.$bizname.' and Congratulations on Signing up. Here are your Login Details: 
		  Username: '.$userusername.'. 
		  Email:  '.$usermail.'. 
      Password: '.$password.'.
      Verification Code: '.$code.' 
		  Please Enter the verification code to verify your email. Congratulations again and Welcome to '.$bizname.'. 
		
		  You got this mail because we think you tried to sign up on www.'.$bizname.'.com. If you think we made a mistake, just ignore this message.';

      $mail->send();

      echo "successful"; 

      }else{
      echo "failed";
      }
     }
    };
?>