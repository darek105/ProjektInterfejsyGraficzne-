<?php
	if (isset($_POST["sendToPhp"])) {

		$message = $_POST['message'];
		$from = 'Interfejsy graficzne';
		$to = 'darek123551@gmail.com';
		$subject = 'Message from Interfejsow';

		$body = "From: $from\n Message:\n $message";


// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
	if (mail ($to, $subject, $body, $from)) {
		echo "ok";
	} else {
		echo "nie ok";
	}
}
	}
?>
