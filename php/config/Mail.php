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
       $mail->Host = 'smtp.hostinger.com';
       $mail->Port = 587;
       $mail->SMTPAuth = true;
       $mail->Username = 'contact@speakprogramming.ro';
       $mail->Password = 'CgPd7pqmPXXx2';
       $mail->setFrom("contact@speakprogramming.ro", "Speak Programming");
       return $mail;
   }
}