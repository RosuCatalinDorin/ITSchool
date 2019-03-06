<?php
/**
 * Created by PhpStorm.
 * User: catalin.rosu
 * Date: 06/03/2019
 * Time: 9:16 PM
 */

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../config/Database.php';
include_once '../models/Controler.php';
//todo: de vazut formularul de inscriere a celor de la scola informala. Date despre cursnat
// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate controlerobj
$controler= new Controler($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

$controler->title = $data->title;
$controler->body = $data->body;
$controler->author = $data->author;
$controler->category_id = $data->category_id;

// Create post
if($controler->create()) {
    echo json_encode(
        array('message' => 'Post Created')
    );
} else {
    echo json_encode(
        array('message' => 'Post Not Created')
    );
}

