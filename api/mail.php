<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email']) || !isset($data['formation']) || !isset($data['session'])) {
    echo json_encode(["status" => "error", "message" => "Missing parameters"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Configuration du serveur SMTP
    $mail->isSMTP();
    // $mail->isMail();
    $mail->Host = 'mail.glomulser.com'; // Remplacez par votre hôte SMTP
    $mail->SMTPAuth = true;
    $mail->Username = 'admission@ifpfranchise.com'; // Remplacez par votre e-mail SMTP
    $mail->Password = 'Franchise2@20'; // Remplacez par votre mot de passe SMTP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    // Configuration de l'e-mail
    $mail->setFrom('admission@ifpfranchise.com', 'noreply@ifpfranchise.com');
    $mail->addAddress($data['email']);
    if (isset($data['cc'])) {
        $mail->addCC($data['cc']);
    }
    if (isset($data['bcc'])) {
        $mail->addBCC($data['bcc']);
    }
    // if (isset($data['reply_to'])) {
    //     $mail->addReplyTo("test@ifpfranchise.com");
    // }
    $mail->addReplyTo("admission@ifpfranchise.com");
    // Charger le template HTML
    $template = file_get_contents('email_template.html');

    // Remplacer les variables dynamiques
    $template = str_replace('{{name}}', $data['name'], $template);
    $template = str_replace('{{formation}}', $data['formation'], $template);
    
    $mail->isHTML(true);
    $mail->Subject = "Confirmation d’inscription – Prochaine étape pour finaliser votre admission";
    $mail->Body    = $template;
    $mail->AltBody = "";

    // Envoi de l'e-mail
    $mail->send();
    echo json_encode(["status" => "success", "message" => "Email sent successfully{$mail->ErrorInfo}"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "{$e} :Email could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}