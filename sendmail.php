<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  $mail->setFrom('kyrogane1@gmail.com', 'Провайдер Інтернету ГАЛІНТЕЛ');

  $mail->addAddress('code@gmail.com');

  $mail->Subject = 'Доброго дня! Чим можемо допомогти?';

  $body = '<h1>Greeting GALINTEL</h1>';

  if (trim(!empty($_POST['name']))){
    $body.='<p><strong>Імя:</strong> '.$_POST['name'].'</p>';
  }
  if (trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
  }
  if (trim(!empty($_POST['phone']))){
    $body.='<p><strong>Номер телефону:</strong> '.$_POST['phone'].'</p>';
  }
  if (trim(!empty($_POST['message']))) {
    $body.='<p><strong>Повідомлення:</strong> '.$_POST['message'].'</p>';
  }

  $mail->Body = $body;

  if (!$mail->send()) {
    $message = 'Помилка';
  } else {
    $message = 'Питання надіслано';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>