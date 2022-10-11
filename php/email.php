<?php
    //este es el correo al que se envia el mensaje//
    $destinatario = 'william.lopez.leon@gmail.com'
    $name = $_POST['name'];
    $email = $_POST['email'];
    $project = $_POST['project'];
    $message = $_POST['message'];

    $header ='Enviado desde la página William López | Data Analyst';
    $completemessage = $project . \n . $message . \n . "Atentamente." . \n . $name . \n . "Email:" . \n . $email


    mail($destinatario, $project, $completemessage, $header);
   // echo "<script>alert('correo enviado exitosamente')</script>";
    //echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";
?>