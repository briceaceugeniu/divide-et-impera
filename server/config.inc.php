<?php
header("Content-Type: application/json");

$server = "127.0.0.1";
$user = "root";
$psswd = "mysql";
$db = "divetimp";

try {
    $conn = new PDO("mysql:host=$server;dbname=$db", $user, $psswd);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    echo "DB Connection failed: " . $e->getMessage();
}
