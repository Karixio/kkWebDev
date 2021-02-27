<?php
    if(isset($_POST['submit'])){
        $name = $_POST["name"];
        $mailFrom = $_POST["email"];
        $message = $_POST["textValue"];

        $mailTo = "examplemail@example";
        $headers = "Message from KKWevDev sent by: ".$mailFrom;
        $txt = "You have recieved an e-mail from ".$name.".\n\n".$message;

        mail ($mailTo, $headers, $txt);
        header("Location: index.html?mailsend");
    }
?>