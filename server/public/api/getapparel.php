<?php
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');

    require_once('db_connection.php');

    if (!$dbc) throw new Exception("db connection error " . mysqli_connect_error());

    $query = "SELECT * FROM apparel";

    $result = mysqli_query($dbc, $query);

    if (!$result) throw new Exception ("query error ".mysqli_error());

    $data = [];

    while ($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }

    print(json_encode($data));

?>