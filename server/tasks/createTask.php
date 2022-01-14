<?php

/* example of body input
 {
    "title": "task title",
    "description": "task description test",
    "reward": "coffe test bla",
    "owner": 2,
    "parent": 0
}
 */

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("HTTP/1.0 403 Forbidden");
}

include "../config.inc.php";
include "../auth.inc.php";

UserAuthentication();
$response = [];

function isValidJSON($str) : bool {
    json_decode($str);
    return json_last_error() == JSON_ERROR_NONE;
}

function FailRequest($error_msg) {
    $response['success'] = false;
    $response['error_msg'] = $error_msg;
    echo json_encode($response, JSON_PRETTY_PRINT);
    exit();
}

function ValidateMandatoryTaskParam($param) {
    if (strlen($param) > 0) {
        return htmlspecialchars($param);
    }
    else {
        FailRequest("Bad request");
    }
}

$json_params = file_get_contents("php://input");

if (!(strlen($json_params) > 0 && isValidJSON($json_params))) {
    FailRequest("Json decoding error: " . json_last_error_msg());
}

$task_param = (array) json_decode($json_params);
global $conn;

$title = ValidateMandatoryTaskParam($task_param['title']);
$description = strlen($task_param['description']) > 0 ? htmlspecialchars($task_param['description']) : null;
$reward = ValidateMandatoryTaskParam($task_param['reward']);
$owner = $task_param['owner']; // TODO: validate with auth token or something similar
$parent = $task_param['parent']; // TODO: check if parent belongs to the user

$data = [
    'title' => $title,
    'description' => $description,
    'reward' => $reward,
    'owner' => $owner,
    'parent' => $parent,
];
$q = "INSERT INTO task (title, description, progress, reward, ts, owner, parent) 
            VALUES (:title, :description, 0, :reward, NOW(), :owner, :parent)";
$stmt= $conn->prepare($q);
if($stmt->execute($data)) {
    $response['success'] = true;
    echo json_encode($response, JSON_PRETTY_PRINT);
    exit();
}
else {
    FailRequest("DB fail: " . $stmt->errorCode());
}






