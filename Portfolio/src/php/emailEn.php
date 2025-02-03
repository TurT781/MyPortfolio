<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $mobile_number = $_POST['mobile_number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];


    $to = "flavien.patriarca@epitech.eu";

    if (mail($to, $subject, $message_body)) {
        echo "<p>Your message has been successfully sent to $to.</p>";
    } else {
        echo "<p>Sorry, an error occurred while sending your message.</p>";
    }
}
?>
