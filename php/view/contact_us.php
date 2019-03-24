<?php
/**
 * Created by PhpStorm.
 * User: catalin.rosu
 * Date: 19/03/2019
 * Time: 1:39 PM
 */


header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../config/Database.php';
include_once '../models/Controler.php';
include_once '../config/emailMsg.php';
include_once '../config/Mail.php';
$database = new Database();
$db = $database->connect();
error_reporting(E_ALL);
// Instantiate controlerobj
$controler= new Controler($db);
// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

if($data == null){
    $controler->email = $_POST['email'];
    $controler->msg = $_POST['msg'];
    $nameCustomer = $controler->email;
}
else {
    $controler->email = $data->email;
    $controler->msg = $data->msg;
    $nameCustomer = $data->email;
}
// Create post
if($controler->contactUS() === true) {

    if ($controler->sendEmail($mesajContactUS,"rosucatalindorin@gmail.com","pausan.ionut.adrian@gmail.com",false,"CONTACT US"))
        echo json_encode(
            array('STATUS' => 'SUCCES',"EMAIL"=>"SUCCES")
        );
    else
        echo json_encode(
            array('STATUS' => 'SUCCES',"EMAIL"=>"ERROR")
        );
} else {
    echo json_encode(
        array('STATUS' => $controler->contactUS())
    );
}

