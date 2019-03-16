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

  $database = new Database();
  $db = $database->connect();




  $post = new Controler($db);
  $result = $post->read();
  $num = $result->rowCount();

  if($num > 0) {
      // Post array
      $posts_arr = array();
      // $posts_arr['data'] = array();
      while($row = $result->fetch(PDO::FETCH_ASSOC)) {
          extract($row);

          $post_item = array(
              'curs_id' => $curs_id,
              'titlu_curs,' => $titlu_curs,
              'tehnologii' => $tehnologii,
              'data_start' => $data_start,
              'data_end' => $data_end,
              'msg_atentionare_date_start,' => $msg_atentionare_date_start,
              'msg_pers_targetate' => $msg_pers_targetate,
              'pret' => $pret,
              'pret_reducere' => $pret_reducere,
              'numar_total_ore' => $numar_total_ore,
              'numar_ore_saptamana' => $numar_ore_saptamana
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
