<?php
include_once '../config/Mail.php';
class Controler {
    // DB stuff
    private $conn;
    private $tableUsers = 'users';
    private $tableMK = 'marketing_users_details';
    private $tableContact = 'contact_us';

    public $curs_id; public $titlu_curs; public $tehnologii; public $data_start;
    public $data_end; public $msg_atentionare_date_start; public $msg_pers_targetate;
    public $pret; public $pret_reducere; public $numar_total_ore; public $numar_ore_saptamana;
    public $first_name; public $last_name; public $telefon; public $birthday; public $email;
    public $cunostinte_it; public $profesie_actuala; public $nivel_engleza; public $info_marketing_source;
    public $accept_termeni_conditii; public $msg;
    // Constructor with DB
    public function __construct($db) {
        $this->conn = $db;
    }
    // Get Curs
    public function getCursuri() {
        // Create query
        $query = 'SELECT curs_id,titlu_curs,durata_curs,poza_prezentare,nivel FROM curs';
        // Prepare statement
        $connection = $this->conn;
        $stmt = $connection->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function getTrainresByCourse() {
        // Create query
        $query = 'SELECT t.nume as NUME,t.prenume AS PRENUME,t.descriere AS DESCRIERE,t.poza AS POZA, T.profesie AS PROFESIE, t.linkedin AS LINKEDIN FROM traineri t
                  INNER JOIN connection_traineri_curs ctc on t.trainer_id = ctc.trainer_id where ctc.curs_id=:CURS_ID';
        // Prepare statement
        $connection = $this->conn;
        $stmt = $connection->prepare($query);
        $stmt->bindParam(':CURS_ID', $this->curs_id);
        $stmt->execute();
        return $stmt;
    }
    // CreateUsers
    public function addCustomerToCourse() {
        $query = "INSERT INTO ". $this->tableUsers." ( first_name, last_name, phone, curs_id, email, birthday) values
                                                     (:first_name,:last_name,:phone,:curs_id,:email,:birthday)";
        // Prepare statement
        $queryUserID = 'SELECT MAX(user_id) as ID_USER from users';

        $queryInsertMarkDet="INSERT INTO ".$this->tableMK."(user_id,  cunostinte_it, profesie_actuala, nivel_engleza, info_marketing_source, accept_termeni_conditii)
                                                    values (:user_id,:cunostinte_it,:profesie_actuala,:nivel_engleza,:info_marketing_source,:accept_termeni_conditii)";
        $connection =  $this->conn;
        $connection->beginTransaction();
        try {
            $stmt = $connection->prepare($query);
            // Clean data
            $this->first_name = htmlspecialchars(strip_tags($this->first_name));
            $this->last_name = htmlspecialchars(strip_tags($this->last_name));
            $this->telefon = htmlspecialchars(strip_tags($this->telefon));
            $this->curs_id = htmlspecialchars(strip_tags($this->curs_id));
            $this->birthday = htmlspecialchars(strip_tags($this->birthday));
            // Bind data
            if($this->first_name==""){
                $this->first_name = null;
            }
            if($this->last_name==""){
                $this->last_name = null;
            }
            if($this->telefon==""){
                $this->telefon = null;
            }
            if($this->curs_id==""){
                $this->curs_id = null;
            }
            if($this->birthday==""){
                $this->birthday = null;
            }
            if($this->email==""){
                $this->email = null;
            }

            $stmt->bindParam(':first_name', $this->first_name);
            $stmt->bindParam(':last_name', $this->last_name);
            $stmt->bindParam(':phone', $this->telefon);
            $stmt->bindParam(':curs_id', $this->curs_id);
            $stmt->bindParam(':email', $this->email);
            $stmt->bindParam(':birthday', $this->birthday);
            $stmt->execute();

            $stmt= $connection->prepare($queryUserID);
            $stmt->execute();
            $ReSQLuserId = $stmt->fetch(PDO::FETCH_ASSOC);

            $stmt = $connection->prepare($queryInsertMarkDet);
            $this->cunostinte_it = htmlspecialchars(strip_tags($this->cunostinte_it));
            $this->profesie_actuala = htmlspecialchars(strip_tags($this->profesie_actuala));
            $this->nivel_engeleza = htmlspecialchars(strip_tags($this->nivel_engleza));
            $this->info_marketing_source = htmlspecialchars(strip_tags($this->info_marketing_source));

            if($this->cunostinte_it==""){
                $this->cunostinte_it = null;
            }
            if($this->profesie_actuala==""){
                $this->profesie_actuala = null;
            }
            if($this->nivel_engleza==""){
                $this->nivel_engleza = null;
            }
            if($this->info_marketing_source==""){
                $this->info_marketing_source = null;
            }
            if($this->info_marketing_source==""){
                $this->info_marketing_source = null;
            }

            $stmt->bindParam(':user_id', $ReSQLuserId['ID_USER']);
            $stmt->bindParam(':cunostinte_it', $this->cunostinte_it);
            $stmt->bindParam(':profesie_actuala', $this->profesie_actuala);
            $stmt->bindParam(':nivel_engleza', $this->nivel_engleza);
            $stmt->bindParam(':info_marketing_source', $this->info_marketing_source);
            $stmt->bindParam(':accept_termeni_conditii', $this->accept_termeni_conditii);
            $stmt->execute();
            $connection->commit();
            return true;
        }
        catch (PDOException $ex){
            $connection->rollBack();
            return $ex;
        }
    }
    public function contactUS (){
        $query = "INSERT INTO ". $this->tableContact." (email,mesaj) values (:email,:msg)";
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->msg = htmlspecialchars(strip_tags($this->msg));
        $connection =  $this->conn;
        $stmt = $connection->prepare($query);
        // Bind data
        if($this->email==""){
            $this->email = null;
        }
        if($this->msg==""){
            $this->msg = null;
        }
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':msg', $this->msg);
        $stmt->execute();
        return true;
    }
    public function sendEmail ($body,$email,$subject){
        $mail1 = new Mail();
        $mail =  $mail1->connectMail();
        $mail->addAddress($email);
        $mail->Subject = $subject;
        $mail->msgHTML($body);
        if($mail->send())
            return true ;
        else
            return false ;
    }
}