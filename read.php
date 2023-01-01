<?php
include("db-connection.php");
$sql = "SELECT joke_content FROM `joke` ORDER BY RAND() LIMIT 1";
$result = $conn->query($sql)->fetch();