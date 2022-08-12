<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$subject = $_POST['subject'];
$to = "bharvi.sampat@gmail.com";
$txt ="Name: ". $name . "\r\nEmail: " . $email . "\r\nMessage: " . $message;
$headers = "From: PankajDalmiaWebsite" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html#get-in-touch");
?>