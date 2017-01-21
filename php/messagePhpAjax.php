<?php

		$message = $_POST['message'];
		$from = 'Interfejsy graficzne';
		$to = 'darek123551@gmail.com';
		$subject = 'Message from Interfejsow';

		// $body = "From: $from\n Message:\n $message";

		echo "ok";
		mail($to, $subject, $message, $from);

?>
