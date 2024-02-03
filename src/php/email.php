<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST["full_name"];
    $email = $_POST["email"];
    $mobile_number = $_POST["mobile_number"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "flavien.patriarca@next-u.fr";
    $subject = "Nouveau message de votre site web";
    $message_body = "Nom: $full_name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Numéro de téléphone: $mobile_number\n";
    $message_body .= "Sujet: $subject\n";
    $message_body .= "Message:\n$message";

    mail($to, $subject, $message_body);

    exit;
}
?>
