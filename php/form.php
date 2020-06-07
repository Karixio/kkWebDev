    <?php

        $to = "krzysztof678876@gmail.com";
        $subject = $_POST["name"];
        $message = $_POST["textValue"];

        mail ($to, $subject, $message);
    ?>