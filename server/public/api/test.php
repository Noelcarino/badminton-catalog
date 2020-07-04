<?php
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');

    require_once('db_connection.php');

    if ($dbc) {
        echo "test worked";
    }

    

?>