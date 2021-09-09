<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject']
    $message = $_POST['msg'];
    $to = "nathan.tang@uwaterloo.ca";
    $header = "From: " .$name;
    $info = "Email: " .$mail "\n\n" .$message ;

    mail($to, $subject, $info, $header);
    header("Location: index.php?sent");
}

?>