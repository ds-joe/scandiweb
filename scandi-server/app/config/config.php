<?php

# Global Constants
define("APP_ROOT", "../app/");

# Access Control
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

# Convert Request Data To PHP Array
$_GET = empty($_GET) ? json_decode(file_get_contents("php://input"), true) : $_GET;
$_POST = empty($_POST) ? json_decode(file_get_contents("php://input"), true) : $_POST;
$_REQUEST = empty($_REQUEST) ? json_decode(file_get_contents("php://input"), true) : $_REQUEST;

