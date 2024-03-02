<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $mobile_number = $_POST['mobile_number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];


    $to = "flavien.patriarca@next-u.fr";

    if (mail($to, $subject, $message_body)) {
        echo "<p>Votre message a été envoyé avec succès à $to.</p>";
    } else {
        echo "<p>Désolé, une erreur s'est produite lors de l'envoi de votre message.</p>";
    }
}
?>
