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

$database = new Database();
$db = $database->connect();

// Instantiate controlerobj
$controler= new Controler($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

if($data == null){
    $controler->curs_id = $_POST['curs_id'];
    $controler->first_name = $_POST['nume'];
    $controler->last_name = $_POST['prenume'];
    $controler->data_nasterii = $_POST['data_nasterii'];
    $controler->cunostinte_it = $_POST['cunostinte_it'];
    $controler->email = $_POST['email'];
    $controler->telefon = $_POST['telefon'];
    $controler->old_industry = $_POST['old_industry'];
    $controler->nivel_engeleza = $_POST['nivel_engeleza'];
    $controler->info_marketing_source = $_POST['info_marketing_source'];
    $controler->accept_termeni_conditii = $_POST['accept_termeni_conditii'];
}
else {
    $controler->curs_id = $data->curs_id;
    $controler->first_name = $data->nume;
    $controler->last_name = $data->prenume;
    $controler->data_nasterii = $data->data_nasterii;
    $controler->cunostinte_it = $data->cunostinte_it;
    $controler->email = $data->email;
    $controler->telefon = $data->telefon;
    $controler->old_industry = $data->old_industry;
    $controler->nivel_engeleza = $data->nivel_engeleza;
    $controler->info_marketing_source = $data->info_marketing_source;
    $controler->accept_termeni_conditii = $data->accept_termeni_conditii;
}


// Create post
if($controler->addCustomerToCourse() === true) {
    echo json_encode(
        array('STATUS' => 'SUCCES')
    );
} else {
    echo json_encode(
        array('STATUS' => $controler->addCustomerToCourse())
    );
}

