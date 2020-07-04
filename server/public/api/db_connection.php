<?php

  DEFINE ('DB_USER','studentdb');
  DEFINE ('DB_PASSWORD','root2');
  DEFINE ('DB_HOST','localhost');
  DEFINE ('DB_NAME','badminton-catalog');

  $dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

 ?>
