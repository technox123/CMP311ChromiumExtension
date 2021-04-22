<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// include database and object files
include_once '../config/database.php';
include_once '../object/account.php';

ini_set("display_errors", 1);
error_reporting(E_ALL);

// Initialize database and Account object
$database = new Database();
$db = $database->getConnection();
  
// initialize object
$Account = new Account($db);
  
// query emails
$stmt = $Account->readEmail();
$num = $stmt->rowCount();

// check if more than 0 records found
if($num>0){
  
    // accounts array
    $accounts_arr=array();
  
    // retrieve table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        extract($row);
  
        $account_item=array(
            "email" => $email,
        );
  
        array_push($accounts_arr, $account_item);
    }
  
    // set response code - 200 OK
    http_response_code(200);
  
    // show emails in json format
    echo json_encode($accounts_arr);
} else{
  
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no products found
    echo json_encode(
        array("message" => "No emails found, please contact administrator.")
    );
}