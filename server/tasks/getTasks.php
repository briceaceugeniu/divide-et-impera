<?php
if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    header("HTTP/1.0 403 Forbidden");
}

include "../config.inc.php";
include "../auth.inc.php";

UserAuthentication();
$response = [];

if (isset($_GET["user_id"]) && !empty($_GET["user_id"]) && is_int((int)$_GET["user_id"])) {
    $user_id = $_GET["user_id"];
}
else {
    $response["success"] = false;
    $response["error_msg"] = "Bad request";
    echo json_encode($response);
    exit();
}

global $conn;

$stmt = $conn->prepare("SELECT `id`, `title`, `description`, `progress`, `reward`, `owner`, `parent` FROM `task` WHERE `owner` = ?");
$stmt->execute(array($user_id));
$tasks = [];
while ($row = $stmt->fetch()) {
    $task = [
        "id"=>$row["id"],
        "title"=>$row["title"],
        "description"=>$row["description"],
        "progress"=>$row["progress"],
        "reward"=>$row["reward"],
        "parent"=>$row["parent"],
        ];
    $tasks[] = $task;
}

if (!empty($tasks)) {
    $response["success"] = true;
    $response["tasks"] = $tasks;
}
else {
    $response["success"] = false;
    $response["error_msg"] = "User does not have any tasks yet.";
}
echo json_encode($response, JSON_PRETTY_PRINT);



