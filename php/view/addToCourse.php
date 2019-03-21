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
    $controler->curs_id = $_POST['curs_id'];
    $controler->first_name = $_POST['nume'];
    $controler->last_name = $_POST['prenume'];
    $controler->birthday = $_POST['data_nasterii'];
    $controler->cunostinte_it = $_POST['cunostinte_it'];
    $controler->email = $_POST['email'];
    $controler->telefon = $_POST['telefon'];
    $controler->profesie_actuala = $_POST['profesie_actuala'];
    $controler->nivel_engleza = $_POST['nivel_engleza'];
    $controler->info_marketing_source = $_POST['info_marketing_source'];
    $controler->accept_termeni_conditii = $_POST['accept_termeni_conditii'];
}
else {
    $controler->curs_id = $data->curs_id;
    $controler->first_name = $data->nume;
    $controler->last_name = $data->prenume;
    $controler->birthday = $data->data_nasterii;
    $controler->cunostinte_it = $data->cunostinte_it;
    $controler->email = $data->email;
    $controler->telefon = $data->telefon;
    $controler->profesie_actuala = $data->profesie_actuala;
    $controler->nivel_engleza = $data->nivel_engleza;
    $controler->info_marketing_source = $data->info_marketing_source;
    $controler->accept_termeni_conditii = $data->accept_termeni_conditii;
}
// Create post
if($controler->addCustomerToCourse() === true) {
    if ($controler->sendEmail($mesajInscriere,$controler->email,"MULTUMIM PENTRU INSCRIERE"))
    echo json_encode(
        array('STATUS' => 'SUCCES',"EMAIL"=>"SUCCES")
    );
    else
        echo json_encode(
            array('STATUS' => 'SUCCES',"EMAIL"=>"ERROR")
        );
} else {
    echo json_encode(
        array('STATUS' => $controler->addCustomerToCourse())
    );
}

