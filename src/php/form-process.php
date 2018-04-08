<?php
//include 'config2.php';
require("class.phpmailer.php");
$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}


// prepare email body text
$MsgContent = "";
$MsgContent .= "Name: ";
$MsgContent .= $name;
$MsgContent .= "<br> \n";
$MsgContent .= "Email: ";
$MsgContent .= $email;
$MsgContent .= "<br> \n";
$MsgContent .= "Message: ";
$MsgContent .= $message;
$MsgContent .= "<br> \n";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPDebug = 1; 
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl'; 
$mail->Host = "smtp.sendgrid.net"; 
$mail->Port = 465; 
$mail->IsHTML(true);
$mail->SetLanguage("tr", "phpmailer/language");
$mail->CharSet  ="utf-8";
$mail->Username = "apikey"; 
$mail->Password = "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"; 
$mail->SetFrom($email, $name); 
$mail->AddAddress("paulo@elegantcleaner.com"); 
$mail->Subject = "Message from Elegant Cleaning Service"; 
$mail->Body = $MsgContent ; 

$success = $mail->Send();


if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG . "<br> Mailer Error: " . $mail->ErrorInfo;
    }
}

?>
