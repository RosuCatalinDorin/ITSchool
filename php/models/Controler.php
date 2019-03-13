<?php 
  class Controler {
    // DB stuff
    private $conn;
    private $tableUsers = 'users';
    private $tableMK = 'marketing_users_details';

      public $curs_id; public $titlu_curs; public $tehnologii; public $data_start;
      public $data_end; public $msg_atentionare_date_start; public $msg_pers_targetate;
      public $pret; public $pret_reducere; public $numar_total_ore; public $numar_ore_saptamana;
      public $first_name; public $last_name; public $telefon; public $data_nasterii; public $email;
      public $cunostinte_it; public $old_industry; public $nivel_engeleza; public $info_marketing_source;
      public $accept_termeni_conditii;
    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get Curs
    public function read() {

      // Create query
      $query = 'SELECT curs.curs_id as curs_id, curs.titlu_curs as titlu_curs,
       curs.tehnologii as tehnologii ,curs.msg_atentionare_date_start as msg_atentionare_date_start, 
       curs.msg_pers_targetate as msg_pers_targetate, curs.pret as pret,curs.pret_reducere as pret_reducere, curs.numar_ore_saptamana as numar_ore_saptamana, curs.numar_total_ore as numar_total_ore, 
       grupa_studenti.data_start as data_start, grupa_studenti.data_end as data_end FROM                                                                                                                                                                                                                                                                                                                                                                                                                                  
       curs JOIN grupa_studenti on grupa_studenti.curs_id = grupa_studenti.curs_id';
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // CreateUsers
      //

    public function addCustomerToCourse() {

         $query = "INSERT INTO ". $this->tableUsers."(first_name,last_name, phone,curs_id,email,birthday) values
                                                     (:first_name,:last_name,:phone,:curs_id,:email,:birthday)";
          // Prepare statement
         $queryUserID = 'SELECT MAX(user_id) as ID_USER from users';
         $queryInsertMarkDet="INSERT INTO ".$this->tableMK."(user_id,cunostinte_it,statut_acual, nivel_engeleza, info_marketing_source, accept_termeni_conditii)
                                                     values (:user_id,:cunostinte_it,:statut_acual,:nivel_engeleza,:info_marketing_source,:accept_termeni_conditii)";
         $connection =  $this->conn;
         $connection->beginTransaction();

         try {
             $stmt = $connection->prepare($query);
             // Clean data
             $this->first_name = htmlspecialchars(strip_tags($this->first_name));
             $this->last_name = htmlspecialchars(strip_tags($this->last_name));
             $this->telefon = htmlspecialchars(strip_tags($this->telefon));
             $this->curs_id = htmlspecialchars(strip_tags($this->curs_id));
             $this->data_nasterii = htmlspecialchars(strip_tags($this->data_nasterii));
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
             if($this->data_nasterii==""){
                 $this->data_nasterii = null;
             }
             if($this->email==""){
                 $this->email = null;
             }

             $stmt->bindParam(':first_name', $this->first_name);
             $stmt->bindParam(':last_name', $this->last_name);
             $stmt->bindParam(':phone', $this->telefon);
             $stmt->bindParam(':curs_id', $this->curs_id);
             $stmt->bindParam(':email', $this->email);
             $stmt->bindParam(':birthday', $this->data_nasterii);
             $stmt->execute();

             $stmt= $connection->prepare($queryUserID);
             $stmt->execute();
             $ReSQLuserId = $stmt->fetch(PDO::FETCH_ASSOC);

             $stmt = $connection->prepare($queryInsertMarkDet);
             $this->cunostinte_it = htmlspecialchars(strip_tags($this->cunostinte_it));
             $this->old_industry = htmlspecialchars(strip_tags($this->old_industry));
             $this->nivel_engeleza = htmlspecialchars(strip_tags($this->nivel_engeleza));
             $this->info_marketing_source = htmlspecialchars(strip_tags($this->info_marketing_source));
             if($this->cunostinte_it==""){
                 $this->cunostinte_it = null;
             }
             if($this->old_industry==""){
                 $this->old_industry = null;
             }
             if($this->nivel_engeleza==""){
                 $this->nivel_engeleza = null;
             }
             if($this->info_marketing_source==""){
                 $this->info_marketing_source = null;
             }
             if($this->info_marketing_source==""){
                 $this->info_marketing_source = null;
             }

             $stmt->bindParam(':user_id', $ReSQLuserId['ID_USER']);
             $stmt->bindParam(':cunostinte_it', $this->cunostinte_it);
             $stmt->bindParam(':statut_acual', $this->old_industry);
             $stmt->bindParam(':nivel_engeleza', $this->nivel_engeleza);
             $stmt->bindParam(':info_marketing_source', $this->info_marketing_source);
             $stmt->bindParam(':accept_termeni_conditii', $this->accept_termeni_conditii);

             $stmt->execute();
             ;
             $connection->commit();
             return true;
         }
         catch (PDOException $ex){
             $connection->rollBack();
             return $ex;
         }
    }

  }