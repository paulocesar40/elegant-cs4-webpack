<?php
//include 'config2.php';
require("class.phpmailer.php");
$errorMSG = "";

// COMPANY
if (empty($_POST["company"])) {
    $errorMSG = "Company is required ";
} else {
    $company = $_POST["company"];
}

// PHONE
if (empty($_POST["companyphone"])) {
    $errorMSG = "Phone is required ";
} else {
    $companyphone = $_POST["companyphone"];
}

// ADDRESS
if (empty($_POST["companyaddress"])) {
    $errorMSG = "Address is required ";
} else {
    $companyaddress = $_POST["companyaddress"];
}

// CITY
if (empty($_POST["city"])) {
    $errorMSG = "City is required ";
} else {
    $city = $_POST["city"];
}

// STATE
if (empty($_POST["state"])) {
    $errorMSG = "State is required ";
} else {
    $state = $_POST["state"];
}

// ZIP CODE
if (empty($_POST["zipcode"])) {
    $errorMSG = "ZIP Code is required ";
} else {
    $zipcode = $_POST["zipcode"];
}

// NAME
if (empty($_POST["estimatename"])) {
    $errorMSG = "Name is required ";
} else {
    $estimatename = $_POST["estimatename"];
}

// EMAIL
if (empty($_POST["estimateemail"])) {
    $errorMSG .= "Email is required ";
} else {
    $estimateemail = $_POST["estimateemail"];
}

// MOBILE
if (empty($_POST["mobile"])) {
    $errorMSG = "Mobile Phone is required ";
} else {
    $mobile = $_POST["mobile"];
}

// MESSAGE
if (empty($_POST["estimatemessage"])) {
    $errorMSG .= "Message is required ";
} else {
    $estimatemessage = $_POST["estimatemessage"];
}


// prepare email body text
$MsgContent = "";
$MsgContent .= "Company: ";
$MsgContent .= $company;
$MsgContent .= "<br> \n";
$MsgContent .= "Phone: ";
$MsgContent .= $companyphone;
$MsgContent .= "<br> \n";
$MsgContent .= "Address: ";
$MsgContent .= $companyaddress;
$MsgContent .= "<br> \n";
$MsgContent .= "City: ";
$MsgContent .= $city;
$MsgContent .= "<br> \n";
$MsgContent .= "State: ";
$MsgContent .= $state;
$MsgContent .= "<br> \n";
$MsgContent .= "ZIP Code: ";
$MsgContent .= $zipcode;
$MsgContent .= "<br> \n";
$MsgContent .= "Name: ";
$MsgContent .= $estimatename;
$MsgContent .= "<br> \n";
$MsgContent .= "Email: ";
$MsgContent .= $estimateemail;
$MsgContent .= "<br> \n";
$MsgContent .= "Mobile: ";
$MsgContent .= $mobile;
$MsgContent .= "<br> \n";
$MsgContent .= "Message: ";
$MsgContent .= $estimatemessage;
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
$mail->SetFrom($estimateemail, $estimatename); 
$mail->AddAddress("paulo@elegantcleaner.com"); 
$mail->Subject = "Estimate Request from Elegant Cleaning Service"; 
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
