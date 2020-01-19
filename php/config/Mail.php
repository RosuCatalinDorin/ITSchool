<?php
/**
 * Created by PhpStorm.
 * User: catalin.rosu
 * Date: 19/03/2019
 * Time: 9:54 AM
 */
require '../PHPMailer/phpmailer/PHPMailerAutoload.php';

class Mail {
   public $mail;
   public function connectMail() {
       $mail = new PHPMailer();
       $mail->isSMTP();
       $mail->Host = '';
       $mail->Port = 587;
       $mail->SMTPAuth = true;
       $mail->Username = '';
       $mail->Password = '';
       $mail->setFrom("", "Speak Programming");
       return $mail;
   }
}
