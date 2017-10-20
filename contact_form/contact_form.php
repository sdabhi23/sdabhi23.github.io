<?php
    extract($_POST);
    $to = "shrey.dabhi23@gmail.com";
    $subject = "Inquiry from Profile";
    $txt = "Hi I'm $name,\nMy email is $email.\n\n$message";
    $headers = "16BIT039@silverwingtechnologies.com";

    $res = new stdClass();

    if(mail($to,$subject,$txt,$headers)) {
        $res->type = "success";
        $res->message = "Contact form successfully submitted. Thank you, I will get back to you soon!";
        header('Content-Type: application/json');
        $resJSON = json_encode($res);
        
        echo $resJSON;
    } else {
        $res->type = "danger";
        $res->message = "Unable to submit the form. Please try again after sometime!";
        header('Content-Type: application/json');
        $resJSON = json_encode($res);
        
        echo $resJSON;
    }
?>
