<?php
/**
 * Created by PhpStorm.
 * User: catalin.rosu
 * Date: 06/03/2019
 * Time: 9:23 PM
 */

  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../config/Database.php';
  include_once '../models/Controler.php';
  error_reporting(E_ALL);

  $database = new Database();
  $db = $database->connect();
  $post = new Controler($db);
  $post->curs_id = isset($_GET['CURS_ID']) ? $_GET['CURS_ID'] : die(); ;
  $result = $post->getCursById();
  $num = $result->rowCount();

  if($num > 0) {
      // Post array
      $posts_arr = array();
      // $posts_arr['data'] = array();
      $traineri_course = array();
      $result1 = $post->getTrainresByCourse();

      while($row1 = $result1->fetch(PDO::FETCH_ASSOC)) {
          extract($row1);
          $post_item1 = array(
              'NUME,' => $NUME,
              'PRENUME' => $PRENUME,
              'DESCRIERE' => $DESCRIERE,
              'POZA' => $POZA,
              'PROFESIE,' => $PROFESIE,
              'LINKEDIN' => $LINKEDIN
          );
          // Push to "data"
          array_push($traineri_course, $post_item1);
          // array_push($posts_arr['data'], $post_item);
      }

      while($row = $result->fetch(PDO::FETCH_ASSOC)) {
          extract($row);
          $post_item = array(
              'TITLU_CURS,' => $TITLU_CURS,
              'SUB_TITLU' => $SUB_TITLU,
              'NIVEL' => $NIVEL,
              'DATA_START' => $DATA_START,
              'DURATA_CURS,' => $DURATA_CURS,
              'NUMAR_ORE_SAPTAMANA' => $NUMAR_ORE_SAPTAMANA,
              'NUMAR_TOTAL_ORE' => $NUMAR_TOTAL_ORE,
              'PRET' => $PRET,
              'MSG_ATENTIONARE_DATA_START' => $MSG_ATENTIONARE_DATA_START,
              'POZA_DESCRIERE' => $POZA_DESCRIERE,
              'TRAIERI'=>$traineri_course
          );
          // Push to "data"
          array_push($posts_arr, $post_item);
          // array_push($posts_arr['data'], $post_item);
      }

      // Turn to JSON & output
      echo json_encode($posts_arr);

  } else {
      // No Posts
      echo json_encode(
          array('message' => 'No Posts Found')
      );
  }
